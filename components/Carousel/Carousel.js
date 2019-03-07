class Carousel {
  constructor(carousel) {
    this.element = carousel;
    this.prev = document.createElement('span');
    // next and previous buttons
    this.prev.classList.add('prev');
    this.prev.textContent = '❮';
    this.next = document.createElement('span');
    this.next.classList.add('next');
    this.next.textContent = '❯';
    this.element.appendChild(this.prev);
    this.element.appendChild(this.next);
    // images
    this.images = this.element.querySelectorAll('img');
    this.selected = 0;
    this.images[this.selected].classList.add('show');
    // indicators
    const indicatorsSpan = document.createElement('span');
    indicatorsSpan.classList.add('indicators');
    this.indicators = [];
    this.images.forEach(_ => {
      const indicator = document.createElement('div');
      indicator.classList.add('indicator');
      indicatorsSpan.appendChild(indicator);
      this.indicators.push(indicator);
    });
    this.element.appendChild(indicatorsSpan);
    this.indicators[0].classList.add('show');
    // scroll
    this.next.addEventListener('click', () => this.iterImage(1));
    this.prev.addEventListener('click', () => this.iterImage(-1));
  }

  iterImage(num) {
    this.images[this.selected].classList.remove('show');
    this.indicators[this.selected].classList.remove('show');
    this.selected = (this.images.length + (this.selected + (num % this.images.length))) % this.images.length;
    this.images[this.selected].classList.add('show');
    this.indicators[this.selected].classList.add('show');
  }
}

const carousel = new Carousel(document.querySelector('.carousel'));
