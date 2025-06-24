/**
 * Keyboard Navigation Utility
 * Handles arrow key navigation for version tabs
 */

export class KeyboardNavigator {
  constructor(tabs, activeTab, setActiveTab) {
    this.tabs = tabs;
    this.activeTab = activeTab;
    this.setActiveTab = setActiveTab;
    this.isEnabled = true;
  }

  getCurrentIndex() {
    return this.tabs.indexOf(this.activeTab);
  }

  navigateToNext() {
    const currentIndex = this.getCurrentIndex();
    const nextIndex = (currentIndex + 1) % this.tabs.length;
    this.setActiveTab(this.tabs[nextIndex]);
  }

  navigateToPrevious() {
    const currentIndex = this.getCurrentIndex();
    const prevIndex = currentIndex === 0 ? this.tabs.length - 1 : currentIndex - 1;
    this.setActiveTab(this.tabs[prevIndex]);
  }

  handleKeyPress(event) {
    if (!this.isEnabled) return;

    // Only handle arrow keys
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.navigateToNext();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.navigateToPrevious();
    }
  }

  enable() {
    this.isEnabled = true;
  }

  disable() {
    this.isEnabled = false;
  }
}

/**
 * Hook for using keyboard navigation in React components
 */
export const useKeyboardNavigation = (tabs, activeTab, setActiveTab, enabled = true) => {
  const navigator = new KeyboardNavigator(tabs, activeTab, setActiveTab);
  
  if (!enabled) {
    navigator.disable();
  }

  return {
    handleKeyDown: (event) => navigator.handleKeyPress(event),
    navigator
  };
};

/**
 * Higher-order function to add keyboard navigation to any component
 */
export const withKeyboardNavigation = (Component) => {
  return function KeyboardNavigatedComponent(props) {
    const { tabs, activeTab, setActiveTab, enableKeyboard = true, ...otherProps } = props;
    
    const { handleKeyDown } = useKeyboardNavigation(tabs, activeTab, setActiveTab, enableKeyboard);

    // Add keyboard event listener when component mounts
    React.useEffect(() => {
      if (enableKeyboard) {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
      }
    }, [handleKeyDown, enableKeyboard]);

    return <Component {...otherProps} />;
  };
};