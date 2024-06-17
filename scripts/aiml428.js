const quizzes = {
    quiz1: [
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
    ],
    quiz2: [
        {
            question: "How to transfer documents to vectors?",
            options: [
                "Using term frequency (TF) and inverse document frequency (IDF) to create a vector space model.",
                "By creating a graph representation of the document structure.",
                "Using a decision tree to categorize the document.",
                "Applying convolutional neural networks on document images."
            ],
            correct: 0
        },
        {
            question: "How to compare the distance between a query and a document?",
            options: [
                "By calculating the Euclidean distance between their term vectors.",
                "By measuring the angle between their term vectors using cosine similarity.",
                "Using the Manhattan distance between their term vectors.",
                "Applying a neural network to learn the distance."
            ],
            correct: 1
        },
        {
            question: "What methods could you try to get your website on the first page of Google search results?",
            options: [
                "Optimize your website content with relevant keywords, use proper meta tags, and acquire quality backlinks.",
                "Use as many keywords as possible regardless of relevance.",
                "Flood the website with irrelevant links.",
                "Use flash-based designs for the website."
            ],
            correct: 0
        },
        {
            question: "Name two clustering algorithms and state their main advantage and disadvantage.",
            options: [
                "K-Means: Advantage - simplicity and speed; Disadvantage - requires specifying the number of clusters.",
                "Hierarchical Clustering: Advantage - no need to specify number of clusters; Disadvantage - computationally expensive.",
                "DBSCAN: Advantage - identifies noise and handles clusters of varying shapes; Disadvantage - sensitive to parameters.",
                "Agglomerative Clustering: Advantage - creates a hierarchy of clusters; Disadvantage - does not scale well with large datasets."
            ],
            correct: 2
        },
        {
            question: "Explain how DBSCAN works using an example data set.",
            options: [
                "DBSCAN groups points into clusters based on density, identifying core points, reachable points, and outliers.",
                "DBSCAN assigns each point to the nearest cluster center iteratively.",
                "DBSCAN creates clusters by splitting and merging existing clusters based on distance.",
                "DBSCAN fits a mixture of Gaussians to the data to form clusters."
            ],
            correct: 0
        },
        {
            question: "What is Explicit Semantic Analysis (ESA)?",
            options: [
                "A method that represents the meaning of texts as a weighted vector of Wikipedia-based concepts.",
                "A rule-based system to analyze the sentiment of text.",
                "A deep learning approach to understanding text semantics.",
                "A clustering technique for document organization."
            ],
            correct: 0
        },
        {
            question: "What is Bag of Concepts?",
            options: [
                "A method of representing texts by their concepts derived from external knowledge bases like Wikipedia.",
                "A model that uses bags to store words from documents.",
                "An algorithm for sorting documents into predefined categories.",
                "A neural network technique for text generation."
            ],
            correct: 0
        },
        {
            question: "What is word2Vec?",
            options: [
                "A method that uses neural networks to create word embeddings.",
                "A rule-based approach to text mining.",
                "A statistical method for document classification.",
                "A clustering technique for text data."
            ],
            correct: 0
        },
        {
            question: "What are the main approaches in recommender systems?",
            options: [
                "Collaborative filtering, content-based filtering, and hybrid methods.",
                "Rule-based systems, neural networks, and expert systems.",
                "Statistical analysis, decision trees, and support vector machines.",
                "Genetic algorithms, clustering, and anomaly detection."
            ],
            correct: 0
        },
        {
            question: "What are the main differences between CNN and RNN?",
            options: [
                "CNNs are used for spatial data and RNNs are used for sequential data.",
                "CNNs are rule-based while RNNs are statistical models.",
                "CNNs use trees to represent data while RNNs use graphs.",
                "CNNs are faster than RNNs in all cases."
            ],
            correct: 0
        },
        {
            question: "What are the two main approaches in query expansion?",
            options: [
                "Relevance feedback and thesaurus-based expansion.",
                "Neural network expansion and clustering-based expansion.",
                "Graph-based expansion and rule-based expansion.",
                "Support vector expansion and decision tree expansion."
            ],
            correct: 0
        }
    ],
    quiz3: [
        {
            question: "What is K-Nearest Neighbors (KNN) used for?",
            options: [
                "Classification and regression tasks.",
                "Only for classification tasks.",
                "Only for regression tasks.",
                "For clustering tasks."
            ],
            correct: 0
        },
        {
            question: "What does TF-IDF stand for and what is its purpose?",
            options: [
                "Term Frequency-Inverse Document Frequency; it measures the importance of a word in a document relative to a corpus.",
                "Total Frequency-Index Document Frequency; it counts the total occurrences of words.",
                "Term Frequency-Index Document Frequency; it measures the index of words.",
                "Total Frequency-Inverse Document Frequency; it measures the total importance of words."
            ],
            correct: 0
        },
        {
            question: "What is Word2Vec and what are its two main architectures?",
            options: [
                "A neural network-based model for learning word embeddings; Continuous Bag of Words (CBOW) and Skip-Gram.",
                "A rule-based system for word categorization; CBOW and Skip-Gram.",
                "A clustering algorithm for text; CBOW and GloVe.",
                "A statistical model for text classification; CBOW and LDA."
            ],
            correct: 0
        },
        {
            question: "What is the main advantage of using pre-trained word embeddings?",
            options: [
                "They save computational resources and improve model performance by leveraging large-scale training.",
                "They eliminate the need for any training data.",
                "They make the model interpret every language.",
                "They automatically classify text without any additional models."
            ],
            correct: 0
        },
        {
            question: "What does BERT stand for and what is its primary use?",
            options: [
                "Bidirectional Encoder Representations from Transformers; used for various NLP tasks including text classification and question answering.",
                "Bidirectional Encoding for Robust Text; used for data encryption.",
                "Binary Encoder Representations from Transformers; used for image processing.",
                "Bidirectional Embedding Representations from Text; used for speech recognition."
            ],
            correct: 0
        },
        {
            question: "How does the Attention mechanism in Transformers work?",
            options: [
                "It assigns different importance levels to different words in a sentence, allowing the model to focus on relevant parts of the input.",
                "It uses a sliding window to process parts of the input.",
                "It applies convolutional filters to the input data.",
                "It generates random noise to augment the input data."
            ],
            correct: 0
        },
        {
            question: "What is the main function of the PageRank algorithm?",
            options: [
                "To rank web pages based on the number and quality of links to them.",
                "To count the total number of words on a web page.",
                "To measure the semantic similarity between web pages.",
                "To categorize web pages into predefined topics."
            ],
            correct: 0
        },
        {
            question: "What are the two main approaches in recommender systems?",
            options: [
                "Collaborative filtering and content-based filtering.",
                "Supervised learning and unsupervised learning.",
                "Clustering and classification.",
                "Neural networks and decision trees."
            ],
            correct: 0
        },
        {
            question: "What is the purpose of query expansion in information retrieval?",
            options: [
                "To improve search results by including additional relevant terms in the query.",
                "To reduce the number of search results.",
                "To sort the search results by relevance.",
                "To categorize the search results into predefined topics."
            ],
            correct: 0
        },
        {
            question: "What is the main difference between CNN and RNN in the context of text classification?",
            options: [
                "CNNs are used for spatial data while RNNs are used for sequential data.",
                "CNNs are faster than RNNs in all cases.",
                "CNNs use decision trees while RNNs use rule-based methods.",
                "CNNs are better for text classification than RNNs."
            ],
            correct: 0
        },
        {
            question: "What is the purpose of using the `diabetes.csv` file in the KNN classifier notebook?",
            options: [
                "To demonstrate how to apply KNN for a binary classification problem.",
                "To train a neural network on diabetes data.",
                "To perform clustering on diabetes patients.",
                "To visualize the data using scatter plots."
            ],
            correct: 0
        },
        {
            question: "What is the main idea behind the Continuous Bag of Words (CBOW) model?",
            options: [
                "Predicting a target word based on its context words.",
                "Predicting the next word in a sentence.",
                "Generating sentences based on a seed word.",
                "Classifying documents based on word frequencies."
            ],
            correct: 0
        },
        {
            question: "How does the Skip-gram model in Word2Vec work?",
            options: [
                "It predicts context words given a target word.",
                "It predicts a target word based on its context words.",
                "It clusters words into predefined categories.",
                "It generates synonyms for a given word."
            ],
            correct: 0
        },
        {
            question: "What is the advantage of using CNNs for text classification?",
            options: [
                "They can capture local dependencies and identify key phrases in the text.",
                "They can model long-range dependencies in sequences.",
                "They are faster to train than RNNs for all types of data.",
                "They use attention mechanisms to focus on important parts of the input."
            ],
            correct: 0
        },
        {
            question: "What is BERT and why is it significant in recent text representation research?",
            options: [
                "BERT is a pre-trained transformer model that has achieved state-of-the-art results in many NLP tasks.",
                "BERT is a rule-based system for text analysis.",
                "BERT is a statistical model for language generation.",
                "BERT is a clustering algorithm for documents."
            ],
            correct: 0
        },
        {
            question: "What is the primary purpose of BertViz?",
            options: [
                "To visualize the attention mechanisms in BERT models.",
                "To train BERT models on new datasets.",
                "To generate text using BERT models.",
                "To cluster text data using BERT embeddings."
            ],
            correct: 0
        },
        {
            question: "What is a content-based recommender system?",
            options: [
                "A system that recommends items based on the content of the items and the user's previous interactions with similar content.",
                "A system that recommends items based on what other users with similar preferences liked.",
                "A system that randomly suggests items to users.",
                "A system that uses collaborative filtering techniques to recommend items."
            ],
            correct: 0
        },
        {
            question: "What is PageRank and how does it work?",
            options: [
                "PageRank is an algorithm that ranks web pages based on the quality and quantity of links pointing to them.",
                "PageRank is an algorithm that classifies web pages into categories.",
                "PageRank is a clustering algorithm for web pages.",
                "PageRank is a neural network model for predicting web page relevance."
            ],
            correct: 0
        },
        {
            question: "What is the role of query expansion in personalized search?",
            options: [
                "To improve search results by including additional relevant terms based on user preferences and history.",
                "To reduce the number of search results returned.",
                "To sort search results alphabetically.",
                "To filter out irrelevant search results."
            ],
            correct: 0
        },
        {
            question: "What are the main differences between CNNs and RNNs in text processing?",
            options: [
                "CNNs are good at capturing spatial hierarchies, while RNNs are good at capturing sequential dependencies.",
                "CNNs are always faster than RNNs for text processing.",
                "RNNs use convolutional layers while CNNs use recurrent layers.",
                "CNNs can handle variable-length sequences better than RNNs."
            ],
            correct: 0
        }
    ]
};

let currentQuiz = 'quiz1';
let currentQuestionIndex = 0;
let score = 0;

document.addEventListener("DOMContentLoaded", () => {
    displayQuestion();
});

function showQuiz(quiz) {
    currentQuiz = quiz;
    currentQuestionIndex = 0;
    score = 0;

    document.querySelectorAll('.quiz-content').forEach(el => el.classList.add('hidden'));
    document.querySelector(`#${quiz}`).classList.remove('hidden');
    
    document.querySelectorAll('.tab-button').forEach(el => el.classList.remove('active'));
    document.querySelector(`button[onclick="showQuiz('${quiz}')"]`).classList.add('active');
    
    displayQuestion();
}

function displayQuestion() {
    const quiz = quizzes[currentQuiz];
    const questionData = quiz[currentQuestionIndex];
    const questionElement = document.getElementById(`question${currentQuiz.slice(-1)}`);
    const optionsElement = document.getElementById(`options${currentQuiz.slice(-1)}`);
    const nextButton = document.getElementById(`next${currentQuiz.slice(-1)}`);
    const questionNumberElement = document.getElementById(`question-number${currentQuiz.slice(-1)}`);
    const scoreElement = document.getElementById(`score${currentQuiz.slice(-1)}`);

    questionElement.textContent = questionData.question;
    optionsElement.innerHTML = "";

    questionData.options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.onclick = () => checkAnswer(index, optionButton);
        optionsElement.appendChild(optionButton);
    });

    nextButton.classList.add("hidden");
    questionNumberElement.textContent = `Question ${currentQuestionIndex + 1}/${quiz.length}`;
    scoreElement.textContent = `Score: ${score}`;
}

function checkAnswer(selectedIndex, selectedButton) {
    const quiz = quizzes[currentQuiz];
    const questionData = quiz[currentQuestionIndex];
    const correctIndex = questionData.correct;
    const optionsElement = document.getElementById(`options${currentQuiz.slice(-1)}`);
    const nextButton = document.getElementById(`next${currentQuiz.slice(-1)}`);

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
    const quiz = quizzes[currentQuiz];
    currentQuestionIndex++;
    if (currentQuestionIndex < quiz.length) {
        displayQuestion();
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    const quizContainer = document.getElementById(`quiz-container${currentQuiz.slice(-1)}`);
    const resultContainer = document.getElementById(`result-container${currentQuiz.slice(-1)}`);
    const finalScoreElement = document.getElementById(`final-score${currentQuiz.slice(-1)}`);

    quizContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");

    finalScoreElement.textContent = `${score}/${quizzes[currentQuiz].length}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;

    const quizContainer = document.getElementById(`quiz-container${currentQuiz.slice(-1)}`);
    const resultContainer = document.getElementById(`result-container${currentQuiz.slice(-1)}`);

    resultContainer.classList.add("hidden");
    quizContainer.classList.remove("hidden");

    displayQuestion();
}
