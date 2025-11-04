import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import githubService from '../services/githubService';
import { useAuth } from '../hooks/useAuth';

const CommentsSection = () => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [comments, setComments] = useState([]);
  const [newIssueTitle, setNewIssueTitle] = useState('');
  const [newIssueBody, setNewIssueBody] = useState('');
  const [showNewIssueForm, setShowNewIssueForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    loadIssues();
    // Auto-refresh every 30 seconds
    const interval = setInterval(loadIssues, 30000);
    return () => clearInterval(interval);
  }, []);

  const loadIssues = async (showRefreshIndicator = false) => {
    if (showRefreshIndicator) {
      setRefreshing(true);
    } else {
      setLoading(true);
    }
    
    try {
      // Load both open and closed issues
      const [openIssues, closedIssues] = await Promise.all([
        githubService.getIssues(1, 20, 'open'),
        githubService.getIssues(1, 10, 'closed')
      ]);
      
      // Combine and sort by creation date
      const allIssues = [...openIssues, ...closedIssues].sort((a, b) => 
        new Date(b.created_at) - new Date(a.created_at)
      );
      
      setIssues(allIssues);
    } catch (error) {
      console.error('Error loading issues:', error);
    }
    
    setLoading(false);
    setRefreshing(false);
  };

  const loadComments = async (issueNumber) => {
    try {
      const fetchedComments = await githubService.getIssueComments(issueNumber);
      setComments(fetchedComments);
    } catch (error) {
      console.error('Error loading comments:', error);
      setComments([]);
    }
  };

  const handleIssueClick = (issue) => {
    setSelectedIssue(issue);
    loadComments(issue.number);
  };

  const handleCreateIssue = async (e) => {
    e.preventDefault();
    if (!user || !newIssueTitle.trim() || !newIssueBody.trim()) return;

    setSubmitting(true);
    try {
      const githubUrl = `https://github.com/SimonuwuMC/Simonuwu-Fabric-Project/issues/new?title=${encodeURIComponent(newIssueTitle)}&body=${encodeURIComponent(newIssueBody + '\n\n---\nCreado desde: https://simonuwumodpack.netlify.app\nUsuario: ' + (user.displayName || user.email))}`;
      window.open(githubUrl, '_blank');

      setNewIssueTitle('');
      setNewIssueBody('');
      setShowNewIssueForm(false);

      // Refresh issues after a short delay
      setTimeout(() => loadIssues(true), 3000);
    } catch (error) {
      console.error('Error creating issue:', error);
    }
    setSubmitting(false);
  };

  const renderMarkdown = (text) => {
    try {
      const html = marked(text || '');
      return DOMPurify.sanitize(html);
    } catch (error) {
      console.error('Error rendering markdown:', error);
      return text || '';
    }
  };

  // Filter issues by state
  const openIssues = issues.filter((issue) => issue.state === 'open');
  const closedIssues = issues.filter((issue) => issue.state === 'closed');

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
        <span className="ml-3 text-gray-600 dark:text-gray-400">Cargando sugerencias...</span>
      </div>
    );
  }

  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <h2 className="text-3xl font-bold text-red-900 dark:text-red-400">
            💬 Comentarios y Sugerencias
          </h2>
          <button
            onClick={() => loadIssues(true)}
            disabled={refreshing}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors disabled:opacity-50"
            title="Actualizar sugerencias"
          >
            <span className={refreshing ? 'animate-spin' : ''}>🔄</span>
          </button>
        </div>
        {user && (
          <button
            onClick={() => setShowNewIssueForm(!showNewIssueForm)}
            className="bg-red-600 dark:bg-red-800 text-white px-6 py-2 rounded-lg hover:bg-red-700 dark:hover:bg-red-900 transition-colors"
          >
            ➕ Nueva Sugerencia
          </button>
        )}
      </div>

      {!user && (
        <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
          <p className="text-yellow-800 dark:text-yellow-200">
            🔐 Inicia sesión para crear nuevas sugerencias y participar en las discusiones
          </p>
        </div>
      )}

      {/* Formulario para nueva sugerencia */}
      {showNewIssueForm && user && (
        <div className="bg-white dark:bg-gray-700 rounded-lg p-6 mb-6 border border-gray-200 dark:border-gray-600">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            ✨ Nueva Sugerencia
          </h3>
          <form onSubmit={handleCreateIssue}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Título
              </label>
              <input
                type="text"
                value={newIssueTitle}
                onChange={(e) => setNewIssueTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 dark:bg-gray-800 dark:text-gray-200"
                placeholder="Describe tu sugerencia en pocas palabras..."
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Descripción
              </label>
              <textarea
                value={newIssueBody}
                onChange={(e) => setNewIssueBody(e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 dark:bg-gray-800 dark:text-gray-200"
                placeholder="Explica tu sugerencia con más detalle..."
                required
              />
            </div>
            <div className="flex space-x-3">
              <button
                type="submit"
                disabled={submitting}
                className="bg-green-600 dark:bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-700 dark:hover:bg-green-800 transition-colors disabled:opacity-50"
              >
                {submitting ? '📤 Enviando...' : '📤 Enviar Sugerencia'}
              </button>
              <button
                type="button"
                onClick={() => setShowNewIssueForm(false)}
                className="bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200 px-6 py-2 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Lista de Issues */}
        <div className="space-y-6">
          {/* Issues abiertos */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
              🟢 Sugerencias Abiertas 
              <span className="ml-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full text-sm">
                {openIssues.length}
              </span>
            </h3>
            {openIssues.length === 0 ? (
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                No hay sugerencias abiertas
              </div>
            ) : (
              <div className="space-y-3">
                {openIssues.map((issue) => (
                  <div
                    key={issue.id}
                    onClick={() => handleIssueClick(issue)}
                    className={`p-4 rounded-lg border cursor-pointer transition-all ${
                      selectedIssue?.id === issue.id
                        ? 'bg-red-50 dark:bg-red-900/30 border-red-300 dark:border-red-700'
                        : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                          {issue.title}
                        </h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                          <span>#{issue.number}</span>
                          <span>👤 {issue.user.login}</span>
                          <span>📅 {githubService.formatDate(issue.created_at)}</span>
                        </div>
                        <div className="flex items-center space-x-2 mt-2">
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            💬 {issue.comments} comentarios
                          </span>
                          {issue.labels.map((label) => (
                            <span
                              key={label.id}
                              className="px-2 py-1 text-xs rounded-full"
                              style={{
                                backgroundColor: `#${label.color}20`,
                                color: `#${label.color}`,
                              }}
                            >
                              {label.name}
                            </span>
                          ))}
                        </div>
                      </div>
                      <img
                        src={issue.user.avatar_url}
                        alt={issue.user.login}
                        className="w-10 h-10 rounded-full ml-3"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Issues cerrados */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
              🔴 Sugerencias Cerradas
              <span className="ml-2 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded-full text-sm">
                {closedIssues.length}
              </span>
            </h3>
            {closedIssues.length === 0 ? (
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                No hay sugerencias cerradas
              </div>
            ) : (
              <div className="space-y-3">
                {closedIssues.map((issue) => (
                  <div
                    key={issue.id}
                    onClick={() => handleIssueClick(issue)}
                    className={`p-4 rounded-lg border cursor-pointer transition-all opacity-75 ${
                      selectedIssue?.id === issue.id
                        ? 'bg-red-50 dark:bg-red-900/30 border-red-300 dark:border-red-700'
                        : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                          {issue.title}
                        </h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                          <span>#{issue.number}</span>
                          <span>👤 {issue.user.login}</span>
                          <span>📅 {githubService.formatDate(issue.created_at)}</span>
                          {issue.closed_at && (
                            <span>🔒 {githubService.formatDate(issue.closed_at)}</span>
                          )}
                        </div>
                        <div className="flex items-center space-x-2 mt-2">
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            💬 {issue.comments} comentarios
                          </span>
                          {issue.labels.map((label) => (
                            <span
                              key={label.id}
                              className="px-2 py-1 text-xs rounded-full"
                              style={{
                                backgroundColor: `#${label.color}20`,
                                color: `#${label.color}`,
                              }}
                            >
                              {label.name}
                            </span>
                          ))}
                        </div>
                      </div>
                      <img
                        src={issue.user.avatar_url}
                        alt={issue.user.login}
                        className="w-10 h-10 rounded-full ml-3"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Detalles del Issue seleccionado */}
        <div className="space-y-4">
          {selectedIssue ? (
            <>
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                        {selectedIssue.title}
                      </h3>
                      <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                        selectedIssue.state === 'open' 
                          ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                          : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                      }`}>
                        {selectedIssue.state === 'open' ? '🟢 ABIERTO' : '🔴 CERRADO'}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <span>#{selectedIssue.number}</span>
                      <span>👤 {selectedIssue.user.login}</span>
                      <span>📅 {githubService.formatDate(selectedIssue.created_at)}</span>
                    </div>
                  </div>
                  <a
                    href={selectedIssue.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 dark:bg-gray-600 text-white px-3 py-1 rounded text-sm hover:bg-gray-700 dark:hover:bg-gray-500 transition-colors"
                  >
                    Ver en GitHub
                  </a>
                </div>
                <div
                  className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300"
                  dangerouslySetInnerHTML={{
                    __html: renderMarkdown(selectedIssue.body || 'Sin descripción'),
                  }}
                />
              </div>

              {/* Comentarios */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                  💬 Comentarios ({comments.length})
                </h4>
                {comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600"
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <img
                        src={comment.user.avatar_url}
                        alt={comment.user.login}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <span className="font-semibold text-gray-800 dark:text-gray-200">
                          {comment.user.login}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                          {githubService.formatDate(comment.created_at)}
                        </span>
                      </div>
                    </div>
                    <div
                      className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300"
                      dangerouslySetInnerHTML={{
                        __html: renderMarkdown(comment.body),
                      }}
                    />
                  </div>
                ))}

                {comments.length === 0 && (
                  <div className="text-center py-6 text-gray-500 dark:text-gray-400">
                    No hay comentarios aún
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="bg-white dark:bg-gray-700 rounded-lg p-8 border border-gray-200 dark:border-gray-600 text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Selecciona una sugerencia
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Haz clic en cualquier sugerencia de la izquierda para ver los detalles y comentarios
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://github.com/SimonuwuMC/Simonuwu-Fabric-Project/issues"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-gray-800 dark:bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-500 transition-colors"
        >
          <span>🐙</span>
          <span>Ver todas las sugerencias en GitHub</span>
        </a>
      </div>
    </section>
  );
};

export default CommentsSection;