const items = document.querySelectorAll(".item");
const block = document.querySelectorAll(".board");

let dragEl = null;
let dropEl = null;

items.forEach(item => {
    item.draggable = true;
    item.addEventListener("dragstart", e => {
        dragEl = e.target;
        e.target.classList.add("isDragging");
    });
    item.addEventListener("dragend", e => {
        setTimeout(function() {
            e.target.classList.remove("isDragging");
            dragEl = null;
        }, 500)
    });
    item.addEventListener("dragover", e => {
        e.preventDefault();
        dropEl = e.target;
        e.target.classList.add("dragOver");
    })
    item.addEventListener("dragleave", e => {
        e.preventDefault();
        e.target.classList.remove("dragOver");
    })
});

block.forEach(board =>{
    board.addEventListener("dragover", e => {
        e.preventDefault();
        dropEl = e.target;
        e.target.classList.add("dragOver");
    })

    board.addEventListener("dragover", e => {
    e.stopPropagation();
    e.preventDefault();
    board.style.backgroundColor = "dimgray";
    })

    board.addEventListener("dragleave", e => {
    e.stopPropagation();
    e.preventDefault();
    board.style = null;   
    });

    board.addEventListener("drop", function(e) {
        e.preventDefault();
        e.stopPropagation();
        // let dropTag = e.dataTransfer.getData("text/html");
        if (dropEl === this) {
            this.appendChild(dragEl);
        } else {
            this.insertBefore(dragEl, dropEl.nextElementSibling);
            dropEl.classList.remove("dragOver");
            dropEl = null;
        }
    });
})

