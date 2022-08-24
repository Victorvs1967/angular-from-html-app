import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollToService {

  constructor() { }

// Scroll to 'content'
  scrollTo = (content: string) => {
    const SCROLL_STEP = 0.1,
          scrollToContent = document.getElementById(content);

    let currenttScroll = window.scrollY;
    let scrollAnimationId: number | undefined;

    const startAnimationScroll = (newScrollY: number) => {
      const deltaScroll = newScrollY - currenttScroll;
      currenttScroll += deltaScroll * SCROLL_STEP;
      window.scrollTo(0, currenttScroll);

      if (Math.abs(deltaScroll) > 1) {
        scrollAnimationId = window.requestAnimationFrame(() => startAnimationScroll(newScrollY));
      } else {
        window.scrollTo(0, newScrollY);
        stopAnimationScroll();
      }
    };

    const stopAnimationScroll = () => {
      if (scrollAnimationId) {
        window.cancelAnimationFrame(scrollAnimationId);
        scrollAnimationId = undefined;
      }
    };

      stopAnimationScroll();
      currenttScroll = window.scrollY;
      if (scrollToContent) startAnimationScroll(scrollToContent.offsetTop);
  };

}
