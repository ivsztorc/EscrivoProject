var tab1 = document.getElementById('tab1'),
tab2 = document.getElementById('tab2'),
tab3 = document.getElementById('tab3'),
content1 = document.getElementById('content1'),
content2 = document.getElementById('content2'),
content3 = document.getElementById('content3');


function showTab( arg ){
  
  content1.style.display = 'none';
  content2.style.display = 'none';
  content3.style.display = 'none';
  arg.style.display = 'block';
}

tab1.addEventListener("click", function(){ showTab(content1) });
tab2.addEventListener("click", function(){ showTab(content2) });
tab3.addEventListener("click", function(){ showTab(content3) });
