const subjectGrade = id =>{
    const subjectMarks = parseFloat(document.getElementById(`${id}-field`).value);
    console.log(typeof(subjectMarks),subjectMarks);
    if(subjectMarks < 101){
        const grade = gradeValue(subjectMarks);
        document.getElementById(`${id}-grade`).innerHTML = grade;
    }
    else{
        document.getElementById(`${id}-grade`).innerHTML = '';
        alert('Wrong input!!!');
    }
}

const gradeValue = marks=>{
    marks = parseInt( marks/10 );
    switch(marks){
        case 10: 
        return "A+";
        case 9: 
        return "A+";
        case 8: 
        return "A+";
        case 7: 
        return "A";
        case 6:
        return "A-";
        case 5:
        return "B";
        case 4:
        return "C";
        default:
        return "F";
    
    }
}
const total = () => {
    
       const banglaMarks = parseFloat(document.getElementById('bangla-field').value);
       const englishMarks = parseFloat(document.getElementById('english-field').value);
       const ictMarks = parseFloat(document.getElementById('ict-field').value);
       const totalMarks = banglaMarks + englishMarks + ictMarks;
       if(isNaN(totalMarks)){
           alert('input field empty');
       }
       else{
        document.getElementById('total-marks').innerHTML = totalMarks;
        const grade = totalGrade(totalMarks);
        document.getElementById('final-grade').innerHTML = grade;
       }
}

const totalGrade = marks=>{
      marks = marks/3;
      if(marks < 101 && marks > 79){
          return "A+";
      }
      else if(marks < 80 && marks > 69){
          return "A";
      }
      else if(marks < 70 && marks > 59){
          return "A-";
      }
      else if(marks < 60 && marks > 49){
          return "B";
      } 
      else if(marks < 50 && marks > 39){
          return "C";
      }
      else{
          return "F";
      }
}

// const bangla = document.getElementById('bangla-btn');
// bangla.addEventListener('click',()=>{
//     subjectGrade('bangla')
// })
// // document.getElementById('english-btn').addEventListener('click',subjectGrade('english'))
// // document.getElementById('ict-btn').addEventListener('click',subjectGrade('ict'))