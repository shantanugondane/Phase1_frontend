// ========================================
// JAVASCRIPT FUNDAMENTALS - TODO LIST APP
// ========================================

// 1. VARIABLES (let, const)
let todos = []; // Array to store todo objects
const STORAGE_KEY = 'todos'; // Constant for localStorage key
let currentFilter = 'all'; // Current filter state

// 2. DOM ELEMENTS (using const for references)
const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const todoControls = document.getElementById('todoControls');
const emptyState = document.getElementById('emptyState');
const stats = document.getElementById('stats');
const activeCount = document.getElementById('activeCount');
const clearCompletedBtn = document.getElementById('clearCompleted');

// 3. FUNCTIONS (Declaration, Arrow Functions)

// Function Declaration - Create a new todo object
function createTodo(text) {
    return {
        id: Date.now(), // Unique ID using timestamp
        text: text.trim(),
        completed: false,
        createdAt: new Date().toISOString()
    };
}

// Arrow Function - Save todos to localStorage
const saveTodos = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};

// Arrow Function - Load todos from localStorage
const loadTodos = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
};

// Arrow Function - Get filtered todos
const getFilteredTodos = () => {
    switch (currentFilter) {
        case 'active':
            return todos.filter(todo => !todo.completed);
        case 'completed':
            return todos.filter(todo => todo.completed);
        default:
            return todos;
    }
};

// Arrow Function - Update UI based on todos state
const updateUI = () => {
    const filteredTodos = getFilteredTodos();
    const activeTodos = todos.filter(todo => !todo.completed);
    
    // Show/hide controls and stats
    todoControls.style.display = todos.length > 0 ? 'flex' : 'none';
    stats.style.display = todos.length > 0 ? 'block' : 'none';
    emptyState.style.display = todos.length === 0 ? 'block' : 'none';
    
    // Update active count
    activeCount.textContent = activeTodos.length;
    
    // Render todos
    renderTodos(filteredTodos);
};

// 4. ARRAYS, OBJECTS, LOOPS (forEach, map, filter)

// Function to render todos using forEach
const renderTodos = (todosToRender) => {
    // Clear current list
    todoList.innerHTML = '';
    
    // Use forEach to iterate through todos
    todosToRender.forEach(todo => {
        const todoElement = createTodoElement(todo);
        todoList.appendChild(todoElement);
    });
};

// Function to create todo element using template literals and object destructuring
const createTodoElement = (todo) => {
    // 5. ES6 CONCEPTS: Destructuring
    const { id, text, completed } = todo;
    
    // Create li element
    const li = document.createElement('li');
    li.className = `todo-item ${completed ? 'completed' : ''}`;
    li.dataset.id = id;
    
    // Use template literals for HTML
    li.innerHTML = `
        <input type="checkbox" class="todo-checkbox" ${completed ? 'checked' : ''}>
        <span class="todo-text">${escapeHtml(text)}</span>
        <div class="todo-actions">
            <button class="action-btn edit-btn" title="Edit">✏️</button>
            <button class="action-btn delete-btn" title="Delete">🗑️</button>
        </div>
    `;
    
    return li;
};

// 6. DOM MANIPULATION - Add event listeners to todo elements
const addTodoEventListeners = (todoElement, todo) => {
    const checkbox = todoElement.querySelector('.todo-checkbox');
    const editBtn = todoElement.querySelector('.edit-btn');
    const deleteBtn = todoElement.querySelector('.delete-btn');
    const todoText = todoElement.querySelector('.todo-text');
    
    // Checkbox event - toggle completion
    checkbox.addEventListener('change', () => {
        toggleTodo(todo.id);
    });
    
    // Edit button event
    editBtn.addEventListener('click', () => {
        editTodo(todoElement, todo);
    });
    
    // Delete button event
    deleteBtn.addEventListener('click', () => {
        deleteTodo(todo.id);
    });
    
    // Double click to edit
    todoText.addEventListener('dblclick', () => {
        editTodo(todoElement, todo);
    });
};

// 7. EVENT HANDLING - Form submission
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo();
});

// Event handling for filter buttons
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
        const filter = e.target.dataset.filter;
        setFilter(filter);
    }
    
    if (e.target.id === 'clearCompleted') {
        clearCompleted();
    }
});

// 8. ASYNC/AWAIT - Simulate API call for adding todo
const addTodo = async () => {
    const text = todoInput.value.trim();
    if (!text) return;
    
    // Show loading state
    todoForm.classList.add('loading');
    
    try {
        // Simulate async operation
        await new Promise(resolve => setTimeout(resolve, 300));
        
        // Create new todo
        const newTodo = createTodo(text);
        
        // Add to todos array using spread operator
        todos = [...todos, newTodo];
        
        // Save and update UI
        saveTodos();
        updateUI();
        
        // Clear input
        todoInput.value = '';
        
        // Add success animation
        const newTodoElement = todoList.querySelector(`[data-id="${newTodo.id}"]`);
        if (newTodoElement) {
            newTodoElement.classList.add('added');
            setTimeout(() => newTodoElement.classList.remove('added'), 600);
        }
        
    } catch (error) {
        console.error('Error adding todo:', error);
    } finally {
        todoForm.classList.remove('loading');
    }
};

// Toggle todo completion
const toggleTodo = (id) => {
    // Use map to create new array with updated todo
    todos = todos.map(todo => 
        todo.id === id 
            ? { ...todo, completed: !todo.completed }
            : todo
    );
    
    saveTodos();
    updateUI();
};

// Delete todo
const deleteTodo = (id) => {
    // Use filter to create new array without the deleted todo
    todos = todos.filter(todo => todo.id !== id);
    
    saveTodos();
    updateUI();
};

// Edit todo
const editTodo = (todoElement, todo) => {
    const todoText = todoElement.querySelector('.todo-text');
    const currentText = todoText.textContent;
    
    // Create input element
    const input = document.createElement('input');
    input.type = 'text';
    input.value = currentText;
    input.className = 'todo-input edit-input';
    
    // Replace text with input
    todoText.style.display = 'none';
    todoElement.insertBefore(input, todoText);
    input.focus();
    input.select();
    
    // Handle input events
    const handleEdit = () => {
        const newText = input.value.trim();
        if (newText && newText !== currentText) {
            // Update todo using map
            todos = todos.map(t => 
                t.id === todo.id 
                    ? { ...t, text: newText }
                    : t
            );
            saveTodos();
            updateUI();
        } else {
            // Restore original text
            todoText.style.display = 'inline';
            input.remove();
        }
    };
    
    input.addEventListener('blur', handleEdit);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleEdit();
        }
    });
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            todoText.style.display = 'inline';
            input.remove();
        }
    });
};

// Set filter
const setFilter = (filter) => {
    currentFilter = filter;
    
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filter);
    });
    
    updateUI();
};

// Clear completed todos
const clearCompleted = () => {
    // Use filter to keep only active todos
    todos = todos.filter(todo => !todo.completed);
    
    saveTodos();
    updateUI();
};

// Utility function to escape HTML
const escapeHtml = (text) => {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
};

// 9. PROMISES & ASYNC/AWAIT - Initialize app
const initializeApp = async () => {
    try {
        // Load todos from localStorage
        todos = loadTodos();
        
        // Update UI
        updateUI();
        
        // Add event listeners to existing todos
        document.querySelectorAll('.todo-item').forEach(todoElement => {
            const id = parseInt(todoElement.dataset.id);
            const todo = todos.find(t => t.id === id);
            if (todo) {
                addTodoEventListeners(todoElement, todo);
            }
        });
        
        console.log('Todo app initialized successfully!');
        
    } catch (error) {
        console.error('Error initializing app:', error);
    }
};

// 10. EVENT DELEGATION - Handle dynamic content
todoList.addEventListener('click', (e) => {
    const todoItem = e.target.closest('.todo-item');
    if (!todoItem) return;
    
    const id = parseInt(todoItem.dataset.id);
    const todo = todos.find(t => t.id === id);
    
    if (e.target.classList.contains('todo-checkbox')) {
        toggleTodo(id);
    } else if (e.target.classList.contains('edit-btn')) {
        editTodo(todoItem, todo);
    } else if (e.target.classList.contains('delete-btn')) {
        deleteTodo(id);
    }
});

// 11. KEYBOARD NAVIGATION
todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        todoInput.value = '';
        todoInput.blur();
    }
});

// 12. LOCAL STORAGE UTILITIES
const clearAllData = () => {
    localStorage.removeItem(STORAGE_KEY);
    todos = [];
    updateUI();
};

// 13. ERROR HANDLING
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
});

// 14. PERFORMANCE OPTIMIZATION - Debounce function
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// 15. INITIALIZATION
document.addEventListener('DOMContentLoaded', initializeApp);

// 16. EXPORT FOR TESTING (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        todos,
        createTodo,
        addTodo,
        toggleTodo,
        deleteTodo,
        clearAllData
    };
}

// 17. CONSOLE LOGGING FOR LEARNING
console.log(`
🎯 JavaScript Fundamentals Covered:
✅ Variables (let, const)
✅ Functions (declaration, arrow)
✅ Arrays, Objects
✅ Loops (forEach, map, filter)
✅ ES6 concepts (destructuring, spread, template literals)
✅ DOM manipulation
✅ Event handling
✅ Promises & async/await
✅ Local Storage
✅ Error handling
✅ Performance optimization

🚀 Todo List App Ready!
`); 