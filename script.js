

document.querySelectorAll('.hotspot').forEach(part => {
  part.addEventListener('click', () => {
    const keyword = part.getAttribute('data-keyword').toLowerCase().trim();
    console.log('Clicked hotspot keyword:', keyword);  
    displayPapers(keyword);
  });
});

function displayPapers(keyword) {
  const container = document.getElementById('papersContainer');
  const pdfViewer = document.getElementById('pdfViewer');
  pdfViewer.style.display = "none";
  pdfViewer.src = "";  

  const matched = allPapers.filter(paper =>
    paper.keyword.some(k => k.toLowerCase().trim() === keyword)
  );

  console.log('Matched papers:', matched);  

  if (matched.length === 0) {
    container.innerHTML = `<h2>No papers available for "${keyword}"</h2>`;
    return;
  }

  container.innerHTML = `
    <h2>Papers related to "${keyword}"</h2>
    <ul>
      ${matched.map(paper =>
        `<li><a href="#" onclick="showPDF('${paper.filename}'); return false;">${paper.title}</a></li>`
      ).join('')}
    </ul>
  `;
}

function showPDF(filename) {
  const pdfViewer = document.getElementById('pdfViewer');
  pdfViewer.src = `pdfs/${filename}`;
  pdfViewer.style.display = "block";
}

function closePaperView() {
  const pdfViewer = document.getElementById('pdfViewer');
  pdfViewer.style.display = "none";
  pdfViewer.src = "";
}
