const cards = [
    {
        question: "Very briefly describe two commonly used models for document representation. Which one is better in the context of text classification? Justify your answer.",
        options: [
            "Bag of Words (BoW) and TF-IDF. TF-IDF is better because it reduces the impact of common words and emphasizes unique words that are more informative for classification.",
            "LDA and BoW. BoW is better because it ignores grammar and word order, making it simpler.",
            "Word2Vec and LDA. LDA is better because it captures the topic distribution in documents.",
            "TF-IDF and LSI. LSI is better because it reduces dimensionality using SVD."
        ],
        correct: 0
    },
    {
        question: "Briefly describe how Word2Vec works and name its two different models.",
        options: [
            "Word2Vec is a count-based model that uses co-occurrence matrices. The two models are Skip-Gram and Continuous Bag of Words (CBOW).",
            "Word2Vec is a neural network-based approach to learning word embeddings. The two models are Skip-Gram and Continuous Bag of Words (CBOW).",
            "Word2Vec is a rule-based model that uses predefined word pairs. The two models are GloVe and fastText.",
            "Word2Vec is a statistical model that uses term frequency. The two models are LDA and LSI."
        ],
        correct: 1
    },
    {
        question: "In your opinion, what are the main limitations of the current text representation models? Suggest some solutions that may address these limitations.",
        options: [
            "Limitations: Capturing semantic meaning, ignoring word frequency. Solutions: Use BoW and TF-IDF.",
            "Limitations: High-dimensional sparse vectors, polysemy. Solutions: Use advanced embeddings like GloVe, fastText, contextualized embeddings like BERT, GPT, and hybrid models.",
            "Limitations: Ignoring grammar, low-dimensional vectors. Solutions: Use more complex models like LDA and LSI.",
            "Limitations: Handling large corpora, ignoring semantics. Solutions: Use rule-based approaches and dictionaries."
        ],
        correct: 1
    },
    {
        question: "Write pseudocode to show the main steps needed to process the data so it can be fed into a simple classifier such as K Nearest Neighbour.",
        options: [
            "1. Load data and labels\n2. Preprocess data using BoW\n3. Split data into training and testing sets\n4. Train classifier using SVM\n5. Evaluate classifier",
            "1. Load data and labels\n2. Preprocess data using TF-IDF\n3. Split data into training and testing sets\n4. Train classifier using KNeighborsClassifier\n5. Evaluate classifier",
            "1. Load data and labels\n2. Preprocess data using Word2Vec\n3. Split data into training and testing sets\n4. Train classifier using Naive Bayes\n5. Evaluate classifier",
            "1. Load data and labels\n2. Preprocess data using LDA\n3. Split data into training and testing sets\n4. Train classifier using Random Forest\n5. Evaluate classifier"
        ],
        correct: 1
    },
    {
        question: "Very briefly explain what a convolutional layer does and what a pooling layer does in the context of image classification. Explain the main differences between CNN for image classification and CNN for text classification.",
        options: [
            "Convolutional layer applies filters to capture local patterns. Pooling layer reduces spatial dimensions. CNN for images captures sequential patterns; CNN for text captures visual features.",
            "Convolutional layer applies filters to capture local patterns. Pooling layer increases spatial dimensions. CNN for images captures visual features; CNN for text captures sequential patterns.",
            "Convolutional layer applies filters to capture local patterns. Pooling layer reduces spatial dimensions. CNN for images captures visual features; CNN for text captures sequential patterns.",
            "Convolutional layer increases spatial dimensions. Pooling layer applies filters to capture local patterns. CNN for images captures visual features; CNN for text captures sequential patterns."
        ],
        correct: 2
    },
    {
        question: "What are the main differences between text classification and text clustering? Name one evaluation measure for classification and one for clustering, and briefly explain how they are calculated.",
        options: [
            "Text classification is unsupervised, grouping documents based on similarities. Text clustering is supervised, assigning predefined labels. Evaluation measures: Precision (classification) and F1-Score (clustering).",
            "Text classification is supervised, assigning predefined labels. Text clustering is unsupervised, grouping based on similarities. Evaluation measures: Accuracy (classification) and Silhouette Score (clustering).",
            "Text classification is supervised, assigning predefined labels. Text clustering is unsupervised, grouping based on similarities. Evaluation measures: F1-Score (classification) and Precision (clustering).",
            "Text classification is supervised, grouping documents based on similarities. Text clustering is unsupervised, assigning predefined labels. Evaluation measures: Silhouette Score (classification) and Accuracy (clustering)."
        ],
        correct: 1
    },
    {
        question: "Describe how you would represent data, choose a clustering algorithm, and evaluate the performance of a system that groups all unique words in a book into clusters.",
        options: [
            "Represent words using BoW. Use DBSCAN for clustering. Evaluate using Silhouette Score.",
            "Represent words using LDA. Use K-Means for clustering. Evaluate using Precision.",
            "Represent words using embeddings (Word2Vec). Use K-Means for clustering. Evaluate using Silhouette Score.",
            "Represent words using TF-IDF. Use Agglomerative Clustering. Evaluate using F1-Score."
        ],
        correct: 2
    },
    {
        question: "Name at least five clustering algorithms. Choose one algorithm and briefly outline how it works. Describe one application where the chosen algorithm would perform poorly.",
        options: [
            "Algorithms: K-Means, Hierarchical, DBSCAN, GMM, Agglomerative. DBSCAN clusters based on density. Performs poorly with clusters of varying density, such as social network data.",
            "Algorithms: K-Means, Hierarchical, DBSCAN, GMM, Agglomerative. K-Means clusters based on density. Performs poorly with clusters of varying density, such as social network data.",
            "Algorithms: K-Means, LDA, DBSCAN, GMM, Agglomerative. LDA clusters based on density. Performs poorly with clusters of varying density, such as social network data.",
            "Algorithms: K-Means, Hierarchical, DBSCAN, GMM, LDA. DBSCAN clusters based on density. Performs poorly with clusters of varying density, such as social network data."
        ],
        correct: 0
    },
    {
        question: "Suppose you want to design a house recommender system. What are the challenges? Which approach is most suitable for house recommendation? Justify your answer.",
        options: [
            "Challenges: Heterogeneous data, dynamic listings, personalization, cold start. Hybrid approach (content-based + collaborative filtering) is suitable for addressing these challenges.",
            "Challenges: High-dimensional data, static listings, uniform preferences. Collaborative filtering is suitable for addressing these challenges.",
            "Challenges: Low-dimensional data, dynamic listings, uniform preferences. Content-based filtering is suitable for addressing these challenges.",
            "Challenges: Homogeneous data, static listings, personalization, cold start. Content-based filtering is suitable for addressing these challenges."
        ],
        correct: 0
    },
    {
        question: "What are the main approaches in query expansion?",
        options: [
            "Approaches: Manual/expert-based, automatic relevance feedback, thesaurus-based, ontology-based.",
            "Approaches: Manual/expert-based, automatic relevance feedback, dictionary-based, rule-based.",
            "Approaches: Automatic relevance feedback, thesaurus-based, dictionary-based, ontology-based.",
            "Approaches: Manual/expert-based, automatic relevance feedback, thesaurus-based, dictionary-based."
        ],
        correct: 0
    },
    {
        question: "State the main challenges in natural language understanding.",
        options: [
            "Challenges: Ambiguity, context understanding, variability, complexity, idiomatic expressions.",
            "Challenges: Context understanding, uniformity, variability, complexity, idiomatic expressions.",
            "Challenges: Ambiguity, context understanding, uniformity, complexity, idiomatic expressions.",
            "Challenges: Ambiguity, context understanding, variability, complexity, literal expressions."
        ],
        correct: 0
    },
    {
        question: "Describe a basic algorithm that Google uses to rank search results. Explain its advantages and disadvantages.",
        options: [
            "PageRank: Ranks pages based on backlink quality and quantity. Advantages: Relevance, simplicity. Disadvantages: Manipulation, popularity bias.",
            "HITS: Ranks pages based on hub and authority scores. Advantages: Relevance, simplicity. Disadvantages: Manipulation, popularity bias.",
            "TF-IDF: Ranks pages based on term frequency. Advantages: Relevance, complexity. Disadvantages: Manipulation, popularity bias.",
            "BM25: Ranks pages based on term frequency and document length. Advantages: Relevance, simplicity. Disadvantages: Manipulation, popularity bias."
        ],
        correct: 0
    }
];

let currentCardIndex = 0;
let score = 0;

document.addEventListener("DOMContentLoaded", () => {
    displayCard();
});

function displayCard() {
    const card = cards[currentCardIndex];
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const nextButton = document.getElementById("next");
    const questionNumberElement = document.getElementById("question-number");
    const scoreElement = document.getElementById("score");

    questionElement.textContent = card.question;
    optionsElement.innerHTML = "";

    card.options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.onclick = () => checkAnswer(index, optionButton);
        optionsElement.appendChild(optionButton);
    });

    nextButton.classList.add("hidden");
    questionNumberElement.textContent = `Question ${currentCardIndex + 1}/${cards.length}`;
    scoreElement.textContent = `Score: ${score}`;
}

function checkAnswer(selectedIndex, selectedButton) {
    const card = cards[currentCardIndex];
    const correctIndex = card.correct;
    const optionsElement = document.getElementById("options");
    const nextButton = document.getElementById("next");

    if (selectedIndex === correctIndex) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("incorrect");
        optionsElement.children[correctIndex].classList.add("correct");
    }

    Array.from(optionsElement.children).forEach(button => {
        button.disabled = true;
    });

    nextButton.classList.remove("hidden");
}

function nextQuestion() {
    currentCardIndex++;
    if (currentCardIndex < cards.length) {
        displayCard();
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    const quizContainer = document.getElementById("quiz-container");
    const resultContainer = document.getElementById("result-container");
    const finalScoreElement = document.getElementById("final-score");

    quizContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");

    finalScoreElement.textContent = `${score}/${cards.length}`;
}

function restartQuiz() {
    currentCardIndex = 0;
    score = 0;

    const quizContainer = document.getElementById("quiz-container");
    const resultContainer = document.getElementById("result-container");

    resultContainer.classList.add("hidden");
    quizContainer.classList.remove("hidden");

    displayCard();
}
