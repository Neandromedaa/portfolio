import { ScrollbarPlugin } from 'smooth-scrollbar';

export class AnchorPlugin extends ScrollbarPlugin {
  static pluginName = 'anchor';

  onHashChange = () => {
    this.jumpToHash(window.location.hash);
  };

  onClick = (event) => {
    const target = event.target.closest('a');

    if (!target || target.getAttribute('class') === 'link') {
      return;  
    }
    const hash = target.getAttribute('href');
    
    this.jumpToHash(hash);
  };

  jumpToHash = (hash) => {
    const { scrollbar } = this;

    if (!hash) {
      return;
    }    

    scrollbar.containerEl.scrollTop = 0;

    scrollbar.scrollIntoView(document.querySelector(hash));
  };

  onInit() {
    this.jumpToHash(window.location.hash);

    window.addEventListener('hashchange', this.onHashChange);

    this.scrollbar.contentEl.addEventListener('click', this.onClick);
  }

  onDestory() {
    window.removeEventListener('hashchange', this.onHashChange);

    this.scrollbar.contentEl.removeEventListener('click', this.onClick);
  }
}