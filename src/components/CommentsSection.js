import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import githubService from '../services/githubService';
import { useAuth } from '../hooks/useAuth';

const CommentsSection = () => {
  const [openIssues, setOpenIssues] = useState([]);
  const [closedIssues, setClosedIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [newIssueTitle, setNewIssueTitle] = useState('');
  const [newIssueBody, setNewIssueBody] = useState('');
  const [showNewIssueForm, setShowNewIssueForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    loadIssues();
  }, []);

  const loadIssues = async () => {
    setLoading(true);
    try {
      const open = await githubService.getIssues('open');
      const closed = await githubService.getIssues('closed');
      setOpenIssues(open);
      setClosedIssues(closed);
    } catch (error) {
      console.error('Error al cargar los issues:', error);
    }
    setLoading(false);
  };

  const loadComments = async (issueNumber) => {
    try {
      const fetchedComments = await githubService.getIssueComments(issueNumber);
      setComments(fetchedComments);
    } catch (error) {
      console.error('Error al cargar comentarios:', error);
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
      const githubUrl = `https://github.com/SimonuwuMC/Simonuwu-Fabric-Project/issues/new?title=${encodeURIComponent(newIssueTitle)}&body=${encodeURIComponent(newIssueBody)}`;
      window.open(githubUrl, '_blank');

      setNewIssueTitle('');
      setNewIssueBody('');
      setShowNewIssueForm(false);
      setTimeout(loadIssues, 3000);
    } catch (error) {
      console.error('Error creando el issue:', error);
    }
    setSubmitting(false);
  };

  const renderMarkdown = (text) => {
    const html = marked(text);
    return DOMPurify.sanitize(html);
  };

  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-red-900 dark:text-red-400">
          💬 Comentarios y Sugerencias
        </h2>

        {user && (
          <button
            onClick={() => setShowNewIssueForm(!showNewIssueForm)}
            className="bg-red-600 dark:bg-red-800 text-white px-6 py-2 rounded-lg hover:bg-red-700 dark:hover:bg-red-900 transition-colors"
          >
            ➕ Nueva Sugerencia
          </button>
        )}
      </div>

      {showNewIssueForm && (
        <form
          onSubmit={handleCreateIssue}
          className="mb-8 bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <input
            type="text"
            placeholder="Título de la sugerencia"
            value={newIssueTitle}
            onChange={(e) => setNewIssueTitle(e.target.value)}
            className="w-full p-3 mb-4 bg-gray-900 rounded-lg text-white"
          />
          <textarea
            placeholder="Describe tu sugerencia..."
            value={newIssueBody}
            onChange={(e) => setNewIssueBody(e.target.value)}
            className="w-full p-3 mb-4 bg-gray-900 rounded-lg text-white"
            rows="4"
          />
          <button
            type="submit"
            disabled={submitting}
            className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg text-white"
          >
            {submitting ? 'Enviando...' : 'Enviar Sugerencia'}
          </button>
        </form>
      )}

      {/* Issues abiertos */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-green-500 mb-4">
          📌 Sugerencias Abiertas
        </h3>
        {loading ? (
          <p className="text-gray-400">Cargando sugerencias abiertas...</p>
        ) : openIssues.length === 0 ? (
          <p className="text-gray-400">No hay sugerencias abiertas.</p>
        ) : (
          <ul className="space-y-4">
            {openIssues.map((issue) => (
              <li
                key={issue.id}
                onClick={() => handleIssueClick(issue)}
                className="cursor-pointer p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
              >
                <h4 className="text-xl font-bold text-white">{issue.title}</h4>
                <p
                  className="text-gray-300"
                  dangerouslySetInnerHTML={{ __html: renderMarkdown(issue.body || '') }}
                />
                <span className="text-gray-400 text-sm">
                  Por: {issue.user.login} • {githubService.formatDate(issue.created_at)}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Issues cerrados */}
      <div>
        <h3 className="text-2xl font-semibold text-red-400 mb-4">
          🔒 Sugerencias Cerradas
        </h3>
        {loading ? (
          <p className="text-gray-400">Cargando sugerencias cerradas...</p>
        ) : closedIssues.length === 0 ? (
          <p className="text-gray-400">No hay sugerencias cerradas.</p>
        ) : (
          <ul className="space-y-4">
            {closedIssues.map((issue) => (
              <li
                key={issue.id}
                onClick={() => handleIssueClick(issue)}
                className="cursor-pointer p-4 rounded-lg bg-gray-900 hover:bg-gray-800 transition"
              >
                <h4 className="text-xl font-bold text-gray-300">{issue.title}</h4>
                <p
                  className="text-gray-400"
                  dangerouslySetInnerHTML={{ __html: renderMarkdown(issue.body || '') }}
                />
                <span className="text-gray-500 text-sm">
                  Por: {issue.user.login} • {githubService.formatDate(issue.created_at)}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Mostrar comentarios cuando seleccionas un issue */}
      {selectedIssue && (
        <div className="mt-12 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-4">
            Comentarios de "{selectedIssue.title}"
          </h3>
          {comments.length === 0 ? (
            <p className="text-gray-400">No hay comentarios en esta sugerencia.</p>
          ) : (
            <ul className="space-y-4">
              {comments.map((comment) => (
                <li
                  key={comment.id}
                  className="p-3 rounded-lg bg-gray-700"
                  dangerouslySetInnerHTML={{ __html: renderMarkdown(comment.body) }}
                />
              ))}
            </ul>
          )}
        </div>
      )}
    </section>
  );
};

export default CommentsSection;
