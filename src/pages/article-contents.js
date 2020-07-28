const articles = [

    {
        name: 'stl',
        title: 'Important functions of STL Components in C++',
        content: [
            `STL provides a range of data structures that are very useful in various scenarios.A
            lot of data structures are based on real - life applications.It is a library of containe
            r classes, algorithms, and iterators.It is a generalized library and so, its components are parameterized.`,
           ` <img href=" ./im.png">

            </img>`,


            `Containers or container classes store objects and data. There are in total seven standards “first-class” container 
            classes and three container adaptor classes and only seven header files that provide access to these containers or container 
            adaptors.`,

                `Note: We can include just one library, i.e., #include <bits/stdc++.h> that includes all the STL libraries but in certain 
                competitions, including this library can make the code slow. To overcome this problem, we can add specific libraries to access
                particular data structures of STL. Also while removing the elements, it is required to take care if the data structure is empty or not. 
                Calling remove function on an empty data structure leads to error.`
        ]

    },

    {
        name: 'learn-react',
        title: 'The Fastest Way to Learn React',
        content: [
            `Welcome! Today we're going to be talking about the fastest way to
            learn React..`,
        ]
    }, {
        name: 'learn-node',
        title: 'How to Build a Node Server in 10 Minutes',
        content: [
            `In this article, we're going to be talking looking at a very quick way
            to set up a Node.js server.`,
        ]
    }, {
        name: 'javascript',
        title: 'Closures in javascript',
        content: [
            `Closures are very important concepts of javascripts particularly when we are dealing with asynchronous programing`,
        ]
    },
];

export default articles;