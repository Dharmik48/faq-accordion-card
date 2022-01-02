const questions = document.querySelectorAll('.faq__question')

for (let i = 0; i<questions.length; i++) {
  questions[i].addEventListener('click', (e) => {
    const element = e.target;
    
    element.classList.toggle('active')
  
    closeOtherQuestions(i)

  })
}

function closeOtherQuestions(i) {
  for (let j = 0; j<questions.length; j++) {
    if (questions[j].classList.contains('active') && i!=j) {
      questions[j].classList.remove('active')
    }
  }
} 