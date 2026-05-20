const aes = [
  ['Headache','Mild',18], ['Headache','Moderate',9], ['Nausea','Mild',14], ['Nausea','Moderate',7], ['Fatigue','Mild',11], ['Fatigue','Severe',3], ['Dizziness','Mild',8], ['Rash','Moderate',6]
];
const terms = [...new Set(aes.map(d => d[0]))];
const severities = [...new Set(aes.map(d => d[1]))];
new Chart(document.getElementById('chart'), {
  type: 'bar',
  data: { labels: terms, datasets: severities.map((sev, i) => ({ label: sev, data: terms.map(t => (aes.find(d => d[0] === t && d[1] === sev) || [0,0,0])[2]), backgroundColor: ['#60a5fa','#f59e0b','#ef4444'][i] })) },
  options: { responsive: true, plugins: { title: { display: true, text: 'AE incidence by term' } }, scales: { x: { stacked: true }, y: { stacked: true, beginAtZero: true, title: { display: true, text: 'Participants' } } } }
});
