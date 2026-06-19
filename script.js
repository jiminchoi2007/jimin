
let subjects=JSON.parse(localStorage.getItem('subjects')||'[]');
let tasks=JSON.parse(localStorage.getItem('tasks')||'[]');
let exams=JSON.parse(localStorage.getItem('exams')||'[]');

function save(){
localStorage.setItem('subjects',JSON.stringify(subjects));
localStorage.setItem('tasks',JSON.stringify(tasks));
localStorage.setItem('exams',JSON.stringify(exams));
render();
}

function addSubject(){subjects.push(subject.value);save();}
function addTask(){tasks.push({n:task.value,d:taskDate.value});save();}
function addExam(){exams.push({n:exam.value,d:examDate.value});save();}

function recommend(){
let msg="오늘의 추천: ";
if(tasks.length) msg+="가장 가까운 과제부터 진행하세요. ";
if(exams.length) msg+="시험 대비 복습 시간을 확보하세요. ";
if(!tasks.length && !exams.length) msg+="공강 시간에 자기계발을 추천합니다.";
rec.innerText=msg;
}

function render(){
subjects.innerHTML=window.subjects.map(x=>`<li>${x}</li>`).join('');
tasks.innerHTML=window.tasks.map(x=>`<li>${x.n} (${x.d})</li>`).join('');
exams.innerHTML=window.exams.map(x=>`<li>${x.n} (${x.d})</li>`).join('');
}
render();
