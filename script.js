
// Get the elements from the HTML

const helperForm = document.getElementById("helperForm");

const topicInput = document.getElementById("topic");

const questionInput = document.getElementById("question");

const responseBox = document.getElementById("response");


// Listen for the form being submitted

helperForm.addEventListener("submit", function(event) {

    // Stop the page from refreshing

    event.preventDefault();


    // Get the user's input

    const topic = topicInput.value.trim();

    const question = questionInput.value.trim();


    // Check if the user filled in both fields

    if (topic === "" || question === "") {

        responseBox.value = "Please enter a topic and a question.";

        return;
    }


    // Give a response

    let response = "";


    if (topic.toLowerCase() === "html") {

        response = "HTML is used to structure the content of a webpage. Check that your elements are properly opened and closed.";

    }

    else if (topic.toLowerCase() === "css") {

        response = "CSS is used to style your webpage. If something isn't positioned correctly, check your display, margin, padding and positioning properties.";

    }

    else if (topic.toLowerCase() === "javascript") {

        response = "JavaScript adds functionality to your webpage. Check your variables, functions, event listeners and element IDs.";

    }

    else if (topic.toLowerCase() === "react") {

        response = "React allows you to build user interfaces using components. Check your state, props and component structure.";

    }

    else {

        response = "ENDI is still learning about that topic! Try asking about HTML, CSS, JavaScript or React.";

    }


    // Display the response

    responseBox.value = response;

});

