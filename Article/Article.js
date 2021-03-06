// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerHTML = "expand";
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', (e) => this.expandArticle(e));
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    if (this.expandButton.innerHTML == "expand") {
      this.expandButton.innerHTML = "close";
    } else {
      this.expandButton.innerHTML = "expand";
    }
    this.domElement.classList.toggle('article-open');
  }
}


/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

let articles = document.querySelectorAll('.article');

articles.forEach( domElement => {
  return new Article(domElement);
})
