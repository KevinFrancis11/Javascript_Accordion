//Data for accordian 

const data = [
    {
        id: '1',
        question: "What are accordion components?",
        answer: "Accordion components are UI elements that allow users to expand and collapse sections of content to show or hide related information, improving organization and navigation within an interface."
    },
    {
        id: '2',
        question: "What are the main benefits of using accordion components?",
        answer: "The main benefits of using accordion components include saving space on a page, improving content organization, enhancing user focus by hiding less relevant information, and providing a cleaner, more navigable interface, especially on mobile devices."
    },
    {
        id: '3',
        question: "How do you typically implement an accordion component?",
        answer: "Accordion components are typically implemented using HTML, CSS, and JavaScript. The structure is created with HTML, styling with CSS, and interactivity with JavaScript. Common implementations involve toggling classes to show/hide content, and using transitions for smooth animations when expanding or collapsing sections."
    },
    {
        id: '4',
        question: "What are some best practices for designing accordion components?",
        answer: "Best practices for designing accordion components include: using clear and descriptive headers, indicating expand/collapse state with icons or symbols, ensuring keyboard accessibility, limiting the number of sections to avoid overwhelming users, allowing multiple sections to be open simultaneously if appropriate for the content, and providing smooth animations for a polished user experience."
    }
]



//Starting of the logic of the project

const accordionWrapper = document.querySelector(".accordion");

function createAccordionData() {
    accordionWrapper.innerHTML = data.map(
        (dataItem) =>
        `
        <div class="accordion_item">
            <div class="accordion_title">
                <h3>${dataItem.question}</h3>
                <i class="fa-solid fa-arrow-up"></i>
            </div>
            <div class="accordion_content">
                <p>${dataItem.answer}</p>
            </div>
        </div>
        `
    ).join(" ")
}


createAccordionData()


const getAccordionTitles = document.querySelectorAll(".accordion_title");

getAccordionTitles.forEach((currentItem)=>{
    currentItem.addEventListener("click",(event)=>{
        if(currentItem.classList.contains('active'))
        {
            currentItem.classList.remove('active');
        }
        else
        {
            
            let getAlreadyAddedActiveClasses = document.querySelector('.active');
            //console.log(getAlreadyAddedActiveClasses);
            
            getAlreadyAddedActiveClasses&&getAlreadyAddedActiveClasses.classList.remove("active")

            /*You can also use the below commented method the above is more modern approach*/ 
            // getAlreadyAddedActiveClasses.forEach((currentActiveItem)=>{
            //     currentActiveItem.classList.remove("active");
            // })
            currentItem.classList.add("active");
        }
    })
})







