class Tabs {
  constructor(element) {
    this.element = element;
    this.links = [];
    this.element.querySelectorAll(".tabs-links .tabs-link")
      .forEach(link => this.links.push(new TabLink(link)));
    this.selected = this.links[0];
    this.links.forEach(link => {
      link.element.addEventListener('click', (event) => {
        if (event.target !== this.selected.element) {
          this.selected.deselect();
          this.selected = this.links.find(link => link.element === event.target);
        }
      });
    });
  }
}

class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;
    
    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => this.select());

  };

  deselect() {
    this.element.classList.remove('tabs-link-selected');
    this.tabItem.deselect();
  }

  select() {
    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add('tabs-link-selected');
    
    // Call the select method on the item associated with this link
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    this.element = element;
  }

  deselect() {
    this.element.classList.remove('tabs-item-selected');
  }

  select() {
    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add('tabs-item-selected');
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

// const links = document.querySelectorAll(".tabs .tabs-links .tabs-link");
// links.forEach(link => new TabLink(link));
const tab = new Tabs(document.querySelector(".tabs"));
