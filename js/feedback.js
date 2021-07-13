/**
 * @file JS file for the header component.
 */

(function feedbackScript(Drupal) {
  Drupal.behaviors.feedback = {
    attach(context) {
      context = context || document;
      const feedbackButtons = context.querySelectorAll('.js-toggle-feedback');
      if (!feedbackButtons.length) {
        return;
      }

      feedbackButtons.forEach(feedbackButton => {
        if (!feedbackButton.classList.contains('js-processed')) {

          feedbackButton.addEventListener('click', function (event) {
            const feedbackParent = this.closest('.js-toggle-container');
            const toggleTarget = context.querySelector('#' + this.getAttribute('aria-controls'));
            const currentState = this.getAttribute('aria-expanded');
            if (currentState === 'false') {
              this.setAttribute('aria-expanded', 'true');
            } else {
              this.setAttribute('aria-expanded', 'false');
            }
            feedbackParent.classList.toggle('inactive');
            toggleTarget.classList.toggle('inactive');
            event.preventDefault();
          })
          feedbackButton.classList.add('js-processed');
        }
      });
    }
  };
}(Drupal));
