# 📝 Todo List App - JavaScript Fundamentals

A comprehensive Todo List application designed to help you master JavaScript fundamentals through hands-on practice.

## 🌐 Live Demo

**[View Live Demo](https://advancetodoshantanu.netlify.app/)**

Experience the full functionality of this todo list application with all features working in real-time.

## 🎯 Learning Objectives

This project covers all the JavaScript fundamentals from your Phase 1 learning plan:

- ✅ **Variables** (`let`, `const`)
- ✅ **Functions** (declaration, arrow functions)
- ✅ **Arrays & Objects**
- ✅ **Loops** (`for`, `forEach`, `map`, `filter`)
- ✅ **ES6 Concepts** (destructuring, spread operator, template literals)
- ✅ **DOM Manipulation**
- ✅ **Event Handling**
- ✅ **Promises & async/await**

## 🚀 Features

### Core Functionality

- ✨ Add new todos
- ✅ Mark todos as complete/incomplete
- 🗑️ Delete todos
- ✏️ Edit existing todos (double-click or edit button)
- 🔍 Filter todos (All, Active, Completed)
- 🧹 Clear completed todos
- 📊 Active items counter

### Advanced Features

- 💾 **Local Storage** - Todos persist between sessions
- ⌨️ **Keyboard Navigation** - Escape to clear input, Enter to save edits
- 🎨 **Smooth Animations** - Slide-in effects and hover states
- 📱 **Responsive Design** - Works on all screen sizes
- ♿ **Accessibility** - Proper focus management and ARIA labels

## 🛠️ How to Run

1. **Clone or download** the project files
2. **Open** `index.html` in your web browser
3. **Start using** the app immediately!

No build tools or dependencies required - just pure HTML, CSS, and JavaScript.

## 📚 Code Structure & Learning Guide

### HTML (`index.html`)

- **Semantic HTML5** structure
- **Form handling** with proper validation
- **Accessibility** features
- **Responsive** meta tags

### CSS (`styles.css`)

- **Modern CSS** with Flexbox layouts
- **CSS Grid** for responsive design
- **Animations** and transitions
- **Mobile-first** responsive design
- **CSS custom properties** for theming

### JavaScript (`script.js`)

The JavaScript file is organized to demonstrate each fundamental concept:

#### 1. **Variables & Constants**

```javascript
let todos = []; // Mutable array
const STORAGE_KEY = "todos"; // Immutable constant
```

#### 2. **Functions (Declaration & Arrow)**

```javascript
// Function declaration
function createTodo(text) {
  return { id: Date.now(), text, completed: false };
}

// Arrow function
const saveTodos = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};
```

#### 3. **Arrays & Objects**

```javascript
// Array methods
todos.forEach((todo) => {
  /* ... */
});
todos.map((todo) => {
  /* ... */
});
todos.filter((todo) => !todo.completed);

// Object destructuring
const { id, text, completed } = todo;
```

#### 4. **ES6 Concepts**

```javascript
// Template literals
li.innerHTML = `<span>${escapeHtml(text)}</span>`;

// Spread operator
todos = [...todos, newTodo];

// Destructuring
const { id, text, completed } = todo;
```

#### 5. **DOM Manipulation**

```javascript
// Creating elements
const li = document.createElement("li");
li.className = "todo-item";
li.dataset.id = id;

// Appending to DOM
todoList.appendChild(todoElement);
```

#### 6. **Event Handling**

```javascript
// Form submission
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

// Event delegation
todoList.addEventListener("click", (e) => {
  // Handle dynamic content
});
```

#### 7. **Async/Await**

```javascript
const addTodo = async () => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 300));
    // Add todo logic
  } catch (error) {
    console.error("Error:", error);
  }
};
```

## 🎓 Learning Path

### Week 1: Basic Concepts

1. **Day 1-2**: Study variables, functions, and basic DOM manipulation
2. **Day 3-4**: Learn arrays, objects, and loops
3. **Day 5-7**: Practice ES6 concepts and event handling

### Week 2: Advanced Concepts

1. **Day 8-9**: Master async/await and promises
2. **Day 10**: Build additional features and optimize code

## 🔧 Customization Ideas

Once you're comfortable with the basics, try adding these features:

### Easy Additions

- 🌙 Dark/Light theme toggle
- 📅 Due dates for todos
- 🏷️ Categories/tags
- 🔍 Search functionality

### Intermediate Features

- 📤 Export/import todos
- 🎯 Priority levels
- 📊 Statistics and charts
- ⌨️ Keyboard shortcuts

### Advanced Features

- 🔄 Drag & drop reordering
- 📱 PWA capabilities
- 🌐 Backend integration
- 👥 Multi-user support

## 🧪 Practice Exercises

### Beginner Level

1. Add a "Mark all as complete" button
2. Implement todo categories (Work, Personal, Shopping)
3. Add a character counter for todo text

### Intermediate Level

1. Add due dates with date picker
2. Implement todo priority levels
3. Add search functionality
4. Create a "Recently completed" section

### Advanced Level

1. Implement drag & drop reordering
2. Add todo statistics and charts
3. Create a backup/restore feature
4. Add keyboard shortcuts for all actions

## 📖 Resources for Further Learning

- **MDN JavaScript**: [developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- **JavaScript.info**: [javascript.info](https://javascript.info)
- **Eloquent JavaScript**: [eloquentjavascript.net](https://eloquentjavascript.net)

## 🤝 Contributing

Feel free to fork this project and add your own features! This is a learning project, so experiment and have fun.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy Coding! 🚀**

_Remember: The best way to learn is by doing. Don't just read the code - experiment with it, break it, fix it, and build upon it!_
