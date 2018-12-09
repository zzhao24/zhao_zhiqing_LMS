(() => {
    // variable stack first
    const profInfo = document.querySelector('.profPanelText').querySelectorAll('p'),
    courseDesc = document.querySelector('.courseInfo').querySelectorAll('*'),
    contentTabList = document.querySelector('.lowerPanelNav ul');

    function setCourseInfo() {
        console.log(courseDesc);
        profInfo[0].textContent = classData.coursename;
        profInfo[0].innerHTML += ` - <span class="text-primary">${classData.coursecode}</span>`;
        profInfo[1].textContent = `Professor: ${classData.profname}`;

        // add times
        classData.classtime.forEach(time => {
            let newTime = `<li><span class="fa fa-clock-o">${time}</span>`;
            // do some DOM travesal to get the classtime UL
            profInfo[1].parentElement.querySelector('ul').innerHTML += newTime;
        });


        // Description
        courseDesc[0].textContent = `${classData.coursename} & ${classData.coursecode}` ;
        courseDesc[3].textContent = classData.coursedesc;

        classData.coursecontent.forEach(content=>{
            let newContent = `<li>${content}</li>`;

            contentTabList.innerHTML += newContent;
        });
    }

    setCourseInfo();
})();