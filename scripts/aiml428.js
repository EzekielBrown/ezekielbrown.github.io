const quizzes = {
    quiz1: [
        // Text Representation     
        {
            question: "Very briefly describe two commonly used models for document representation.",
            options: [
                "Bag of Words (BoW) and TF-IDF",
                "LDA and BoW",
                "Word2Vec and LDA",
                "TF-IDF and LSI"
            ],
            correct: 0,
            explanation: "Bag of Words (BoW) represents documents as vectors based on word counts, ignoring grammar and word order. TF-IDF adjusts these counts by considering how often words appear in the entire collection of documents (corpus), giving more importance to rare but informative words."
        },
        {
            question: "Which document representation model is better in the context of text classification? Justify your answer.",
            options: [
                "Bag of Words because it captures word frequency.",
                "TF-IDF because it reduces the impact of common words and emphasizes unique words.",
                "LDA because it captures topic distributions.",
                "Word2Vec because it captures word semantics."
            ],
            correct: 1,
            explanation: "TF-IDF is better for text classification because it reduces the impact of common words that appear frequently across all documents and highlights unique words that are more informative for distinguishing between different classes."

        },
        {
            question: "Briefly describe how Word2Vec works and name its two different models.",
            options: [
                "Word2Vec uses a neural network to learn word associations; the two models are Skip-Gram and Continuous Bag of Words (CBOW).",
                "Word2Vec uses co-occurrence matrices to capture word relationships; the two models are Skip-Gram and CBOW.",
                "Word2Vec is a statistical model that uses term frequency; the two models are LDA and LSI.",
                "Word2Vec is a rule-based model using predefined word pairs; the two models are GloVe and fastText."
            ],
            correct: 0,
            explanation: "Word2Vec is a neural network-based model that creates word embeddings, which are vector representations of words. It has two methods: Skip-Gram predicts context words from a target word, and CBOW (Continuous Bag of Words) predicts a target word from context words. These embeddings capture the meanings of words based on their usage."

        },
        {
            question: "What are the main limitations of current text representation models?",
            options: [
                "They are computationally expensive and require a lot of memory.",
                "They fail to capture the semantic meaning and context of words.",
                "They are too simple and cannot handle large datasets.",
                "They are too complex and hard to implement."
            ],
            correct: 1,
            explanation: "Current text representation models, like Bag of Words and TF-IDF, do not capture the meanings and context of words. They treat words as independent units, missing out on the nuances of natural language, which can be important for understanding and processing text accurately."

        },
        {
            question: "Suggest some solutions that may address the limitations of current text representation models.",
            options: [
                "Using more sophisticated algorithms like neural networks and increasing computational power.",
                "Simplifying the models and reducing the dataset size.",
                "Implementing rule-based systems and manual feature engineering.",
                "Using hybrid models and leveraging more contextual information."
            ],
            correct: 3,
            explanation: "Using hybrid models and leveraging more contextual information can improve text representation. Hybrid models combine the strengths of different approaches, and using contextual information helps capture the meanings and relationships between words, addressing the limitations of simpler models like Bag of Words and TF-IDF."

        },

        // Text Classification
        {
            question: "What are the main steps to process text data for a simple classifier such as K Nearest Neighbour in Python?",
            options: [
                "Tokenize text, remove stop words, vectorize text, train classifier",
                "Tokenize text, convert to lowercase, train classifier",
                "Remove stop words, vectorize text, train classifier",
                "Convert text to lowercase, remove punctuation, train classifier"
            ],
            correct: 0,
            explanation: "The main steps involve tokenizing the text to break it into words, removing stop words to eliminate common but uninformative words, vectorizing the text to convert it into numerical format, and then training the classifier."
        },
        {
            question: "Very briefly explain what a convolutional layer does in the context of image classification.",
            options: [
                "It captures spatial hierarchies in images through convolution operations.",
                "It reduces the dimensions of the input image.",
                "It transforms the input image into feature vectors.",
                "It normalizes the input image."
            ],
            correct: 0,
            explanation: "A convolutional layer applies convolution operations to an input image, capturing spatial patterns and hierarchies. This helps identify features like edges and textures, which are essential for tasks like image classification."

        },
        {
            question: "Very briefly explain what a pooling layer does in the context of image classification.",
            options: [
                "It captures spatial hierarchies in images through convolution operations.",
                "It reduces the dimensions of the input image by summarizing regions.",
                "It transforms the input image into feature vectors.",
                "It normalizes the input image."
            ],
            correct: 1,
            explanation: "A pooling layer reduces the size of the input image by summarizing regions, keeping important features while lowering the amount of data to process. This makes computations faster and helps prevent overfitting."
        },
        {
            question: "Explain the main differences between CNN for image classification and CNN for text classification.",
            options: [
                "CNN for image classification uses pixels; CNN for text classification uses word embeddings.",
                "CNN for image classification uses convolutional layers; CNN for text classification uses RNN layers.",
                "CNN for image classification processes sequential data; CNN for text classification processes spatial data.",
                "CNN for image classification uses pooling layers; CNN for text classification does not."
            ],
            correct: 0,
            explanation: "CNNs for image classification use pixels as input, capturing features like edges and textures. CNNs for text classification use word embeddings as input, capturing patterns in text. Both types of CNNs capture hierarchical features relevant to their specific domains."
        },

        // Text Clustering
        {
            question: "What is the main difference between text classification and text clustering?",
            options: [
                "Classification requires labeled data; clustering does not.",
                "Classification uses unsupervised learning; clustering uses supervised learning.",
                "Classification is based on proximity; clustering is based on predefined labels.",
                "Classification groups data based on semantics; clustering groups data based on syntax."
            ],
            correct: 0,
            explanation: "The main difference is that classification uses labeled data to train the model, meaning each data point has a predefined category. Clustering, on the other hand, doesn't use labels and groups data based on natural patterns in the data."
        },
        {
            question: "Name one evaluation measure for classification and one for clustering.",
            options: [
                "Accuracy and Silhouette Score",
                "Precision and Recall",
                "F1 Score and Confusion Matrix",
                "Precision and ROC-AUC"
            ],
            correct: 0,
            explanation: "Accuracy is used in classification to measure the proportion of correct predictions out of all predictions. Silhouette Score is used in clustering to measure how similar an object is to its own cluster compared to other clusters, indicating the quality of the clustering."

        },
        {
            question: "Suppose you want to design a system that automatically groups all the unique words in a book into different clusters, so that the words in the same cluster are semantically related. Describe how you are going to represent the data.",
            options: [
                "Using TF-IDF vectors.",
                "Using word frequency counts.",
                "Using Word2Vec embeddings.",
                "Using one-hot encoding."
            ],
            correct: 2,
            explanation: "Using Word2Vec embeddings is suitable because it captures the meanings and relationships between words. This helps group words that are contextually and semantically related, making it easier to find similar words."
        },
        {
            question: "Which clustering algorithm might you use for the above system and why?",
            options: [
                "K-means because it is simple and effective for large datasets.",
                "DBSCAN because it handles noise well.",
                "Hierarchical clustering because it creates a tree of clusters.",
                "Gaussian Mixture Models because they assume Gaussian distribution."
            ],
            correct: 0,
            explanation: "K-means is suitable for this task because it is simple to implement and works well with large datasets. It effectively groups words based on their embeddings by partitioning the data into clusters with similar characteristics."
        },
        {
            question: "How would you evaluate the performance of your clustering system?",
            options: [
                "Using Silhouette Score to measure how similar objects are within a cluster and how different they are from objects in other clusters.",
                "Using Accuracy to measure the correctness of clusters.",
                "Using F1 Score to measure the balance between precision and recall.",
                "Using Confusion Matrix to evaluate the classification performance."
            ],
            correct: 0,
            explanation: "Silhouette Score evaluates clustering performance by measuring how similar an object is to its own cluster compared to other clusters. A higher score indicates better-defined clusters, showing the quality of the clustering."
        },
        {
            question: "Name at least five clustering algorithms.",
            options: [
                "K-means, DBSCAN, Hierarchical clustering, Gaussian Mixture Models, Spectral clustering",
                "K-means, Decision Trees, SVM, Random Forest, Naive Bayes",
                "LDA, PCA, SVD, ICA, NMF",
                "Gradient Descent, K-means, DBSCAN, Hierarchical clustering, SVM"
            ],
            correct: 0,
            explanation: "Common clustering algorithms include K-means, DBSCAN, Hierarchical clustering, Gaussian Mixture Models, and Spectral clustering. <br><br> Other algorithms are Agglomerative clustering, BIRCH, OPTICS, Affinity Propagation, Mean Shift, CURE, and Fuzzy C-means. Each of these algorithms has unique strengths and applications depending on the data and clustering requirements."
        },
        {
            question: "Choose one clustering algorithm and very briefly outline how it works.",
            options: [
                "K-means: It partitions data into K clusters by minimizing the variance within each cluster.",
                "DBSCAN: It groups data points based on density, identifying core points and expanding clusters from these points.",
                "Hierarchical Clustering: It creates a tree of clusters (dendrogram) using agglomerative or divisive approaches.",
                "Gaussian Mixture Models: It assumes data is generated from a mixture of Gaussian distributions and uses the Expectation-Maximization (EM) algorithm to estimate parameters."
            ],
            correct: null,
            explanation: `K-means partitions data into K clusters by minimizing the variance within each cluster.
        It starts by selecting K initial centroids, assigns each data point to the nearest centroid, and then updates the centroids by averaging the points in each cluster.<br><br>
        DBSCAN (Density-Based Spatial Clustering of Applications with Noise) groups data points based on their density, identifying core points and expanding clusters from these points, while handling noise effectively.<br><br>
        Hierarchical clustering creates a tree of clusters (dendrogram) using either agglomerative (bottom-up) or divisive (top-down) approaches.<br><br>
        Gaussian Mixture Models (GMM) assume data is generated from a mixture of Gaussian distributions and use the Expectation-Maximization (EM) algorithm to estimate parameters, capturing complex cluster shapes.`
        }
        ,
        {
            question: "Describe one application or task where the chosen algorithm would perform poorly, explaining the reasons why it would not be suitable.",
            options: [
                "K-means would perform poorly on data with non-convex shapes or varying cluster densities because it assumes spherical clusters of similar size.",
                "DBSCAN would perform poorly on datasets with varying densities and high-dimensional data because it relies on a fixed density threshold.",
                "Hierarchical clustering would perform poorly on large datasets because it is computationally expensive and does not scale well.",
                "Gaussian Mixture Models would perform poorly on data that does not fit well into Gaussian distributions, as it assumes the data is generated from a mixture of Gaussian distributions."
            ],
            correct: null,
            explanation: "Each clustering algorithm has scenarios where it may not perform well. K-means assumes spherical clusters of similar size, DBSCAN relies on a fixed density threshold, Hierarchical clustering is computationally expensive for large datasets, and Gaussian Mixture Models assume the data fits Gaussian distributions."
        }
        ,

        // Web Intelligence
        {
            question: "Suppose you want to design a house recommender system to help people to find the right house to buy. What are the challenges?",
            options: [
                "Data sparsity and handling user preferences",
                "Lack of user feedback and real-time data processing",
                "Handling large datasets and feature extraction",
                "User privacy and scalability issues"
            ],
            correct: 0,
            explanation: "Challenges include data sparsity, meaning there are limited interactions per user or item, which makes it difficult to provide accurate recommendations. Additionally, effectively handling user preferences to personalize the recommendations is crucial for the system's success."

        },
        {
            question: "Which approach is most suitable for house recommendation? Justify your answer.",
            options: [
                "Content-based filtering because it uses item features to recommend similar items.",
                "Collaborative filtering because it leverages user preferences to recommend items.",
                "Hybrid approach because it combines both content-based and collaborative filtering for better accuracy.",
                "Matrix factorization because it reduces dimensionality and captures latent factors."
            ],
            correct: 2,
            explanation: "A hybrid approach is most suitable as it combines the strengths of content-based filtering and collaborative filtering, providing better accuracy and overcoming the limitations of individual methods. Content-based filtering recommends items based on their features, while collaborative filtering leverages user preferences to suggest items that similar users have liked."
        },
        {
            question: "What are the main approaches in query expansion?",
            options: [
                "Relevance feedback and synonym-based expansion",
                "Semantic analysis and context awareness",
                "Synonym-based expansion and context modeling",
                "Relevance feedback and hierarchical clustering"
            ],
            correct: 0,
            explanation: "Main approaches include relevance feedback, which uses user feedback to refine queries by incorporating terms from relevant documents, and synonym-based expansion, which adds synonyms to the query to retrieve more relevant results. These methods help improve the quality and relevance of search results."
        },
        {
            question: "State the main challenges in natural language understanding.",
            options: [
                "Ambiguity and diversity of language",
                "Processing speed and memory constraints",
                "Syntax parsing and semantic analysis",
                "Real-time processing and language translation"
            ],
            correct: 0,
            explanation: "Challenges in natural language understanding include ambiguity, where words can have multiple meanings, and diversity of language, where the same idea can be expressed in various ways. These factors make it difficult to accurately interpret and process text. Handling such complexities requires advanced models and techniques."
        },
        {
            question: "Suppose you are using Python to implement a very simple text classification system. You have a collection of documents as plain text files and each document starts with a manually assigned label. Write pseudocode to show the main steps that are needed to process the data so the data can be feed into a simple classifier such as K Nearest Neighbour.",
            options: [
                `1. Read the documents and extract labels and content.
                2. Preprocess the text (e.g., remove punctuation, convert to lowercase, remove stop words).
                3. Convert the text into numerical features using techniques like TF-IDF.
                4. Split the data into training and test sets.
                5. Train a K Nearest Neighbour classifier on the training data.
                6. Evaluate the classifier on the test data.`,
                `1. Read the documents and extract labels and content.
                2. Directly feed the raw text into the K Nearest Neighbour classifier.
                3. Train the K Nearest Neighbour classifier on the raw text.
                4. Evaluate the classifier on the test data.`,
                `1. Read the documents and extract labels and content.
                2. Preprocess the text (e.g., remove punctuation, convert to lowercase).
                3. Convert the text into numerical features using techniques like word embeddings.
                4. Train a Decision Tree classifier on the training data.
                5. Evaluate the classifier on the test data.`,
                `1. Read the documents and extract labels and content.
                2. Preprocess the text (e.g., remove punctuation, convert to lowercase, remove stop words).
                3. Use a clustering algorithm to group similar documents.
                4. Train a K Nearest Neighbour classifier on the clustered data.
                5. Evaluate the classifier on the test data.`
            ],
            correct: 0,
            explanation: `The main steps to implement a simple text classification system using Python are:<br>
        1. Read the documents and extract labels and content.<br>
        2. Preprocess the text (e.g., remove punctuation, convert to lowercase, remove stop words).<br>
        3. Convert the text into numerical features using techniques like TF-IDF.<br>
        4. Split the data into training and test sets.<br>
        5. Train a K Nearest Neighbour classifier on the training data.<br>
        6. Evaluate the classifier on the test data.<br>
        These steps ensure that the text data is cleaned and converted into a suitable format for the classifier to learn from and make predictions.`
        },   
        {
            question: "Describe a basic algorithm that Google uses to rank the search results. Explain its advantages and disadvantages.",
            options: [
                "PageRank: It ranks pages based on the number and quality of links. Advantage: It leverages link structure. Disadvantage: It can be manipulated by link farms.",
                "TF-IDF: It ranks pages based on term frequency. Advantage: It emphasizes important words. Disadvantage: It ignores semantic meaning.",
                "BM25: It ranks pages based on term frequency and document length. Advantage: It balances relevance and length. Disadvantage: It requires parameter tuning.",
                "Latent Semantic Indexing: It ranks pages based on latent topics. Advantage: It captures semantic meaning. Disadvantage: It is computationally expensive."
            ],
            correct: 0,
            explanation: "PageRank ranks web pages based on the number and quality of links pointing to them. It leverages the link structure of the web, meaning that pages with more and higher-quality incoming links are considered more important and are ranked higher. However, PageRank can be manipulated by link farms, which are networks of websites that link to each other to artificially inflate their importance. This manipulation is a significant disadvantage as it can reduce the accuracy and reliability of search results."
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
            correct: 0,
            explanation: "Using term frequency (TF) and inverse document frequency (IDF) to create a vector space model helps represent the importance of words in a document relative to the entire corpus. TF counts how often a word appears in a document, while IDF reduces the weight of common words that appear in many documents."
        },
        {
            question: "How to compare the distance between a query and a document?",
            options: [
                "By calculating the Euclidean distance between their term vectors.",
                "By measuring the angle between their term vectors using cosine similarity.",
                "Using the Manhattan distance between their term vectors.",
                "Applying a neural network to learn the distance."
            ],
            correct: 1,
            explanation: "Cosine similarity measures the angle between term vectors, making it a common method for comparing the similarity of documents in text analysis. It ranges from -1 to 1, where 1 means the documents are identical in terms of direction, regardless of their magnitude."
        },
        {
            question: "What methods could you try to get your website on the first page of Google search results?",
            options: [
                "Optimize your website content with relevant keywords, use proper meta tags, and acquire quality backlinks.",
                "Use as many keywords as possible regardless of relevance.",
                "Flood the website with irrelevant links.",
                "Use flash-based designs for the website."
            ],
            correct: 0,
            explanation: "Optimizing website content with relevant keywords, using proper meta tags, and acquiring quality backlinks are essential SEO practices to improve your website's ranking on Google. These methods help search engines understand the relevance and authority of your site."
        },
        {
            question: "Name two clustering algorithms and state their main advantage and disadvantage.",
            options: [
                "K-Means: Advantage - simplicity and speed; Disadvantage - requires specifying the number of clusters.",
                "Hierarchical Clustering: Advantage - no need to specify number of clusters; Disadvantage - computationally expensive.",
                "DBSCAN: Advantage - identifies noise and handles clusters of varying shapes; Disadvantage - sensitive to parameters.",
                "Agglomerative Clustering: Advantage - creates a hierarchy of clusters; Disadvantage - does not scale well with large datasets."
            ],
            correct: 2,
            explanation: "DBSCAN can identify noise and handle clusters of varying shapes, but it is sensitive to parameter settings, which can affect its performance. Adjusting these parameters (such as epsilon and minPoints) is crucial for obtaining good results."
        },
        {
            question: "Explain how DBSCAN works using an example data set.",
            options: [
                "DBSCAN groups points into clusters based on density, identifying core points, reachable points, and outliers.",
                "DBSCAN assigns each point to the nearest cluster center iteratively.",
                "DBSCAN creates clusters by splitting and merging existing clusters based on distance.",
                "DBSCAN fits a mixture of Gaussians to the data to form clusters."
            ],
            correct: 0,
            explanation: "DBSCAN (Density-Based Spatial Clustering of Applications with Noise) groups points based on density, identifying core points (with many nearby points), reachable points (within the neighborhood of core points), and outliers (points not within the neighborhood of any core point). This makes it effective for clustering spatial data with noise."
        },
        {
            question: "What is Explicit Semantic Analysis (ESA)?",
            options: [
                "A method that represents the meaning of texts as a weighted vector of Wikipedia-based concepts.",
                "A rule-based system to analyze the sentiment of text.",
                "A deep learning approach to understanding text semantics.",
                "A clustering technique for document organization."
            ],
            correct: 0,
            explanation: "Explicit Semantic Analysis (ESA) represents the meaning of texts as a weighted vector of Wikipedia-based concepts, enabling semantic comparison of documents. By linking text to a structured knowledge base like Wikipedia, ESA captures the concepts and topics discussed in the text."
        },
        {
            question: "What is Bag of Concepts?",
            options: [
                "A method of representing texts by their concepts derived from external knowledge bases like Wikipedia.",
                "A model that uses bags to store words from documents.",
                "An algorithm for sorting documents into predefined categories.",
                "A neural network technique for text generation."
            ],
            correct: 0,
            explanation: "Bag of Concepts represents texts by their underlying concepts derived from knowledge bases like Wikipedia. This method enhances semantic analysis by focusing on the concepts and topics within the text, rather than just individual words."
        },
        {
            question: "What is Word2Vec?",
            options: [
                "A method that uses neural networks to create word embeddings.",
                "A rule-based approach to text mining.",
                "A statistical method for document classification.",
                "A clustering technique for text data."
            ],
            correct: 0,
            explanation: "Word2Vec uses neural networks to learn word embeddings, which are vector representations of words. These embeddings capture semantic relationships between words based on their context, making them useful for various natural language processing tasks."
        },
        {
            question: "What are the main approaches in recommender systems?",
            options: [
                "Collaborative filtering, content-based filtering, and hybrid methods.",
                "Rule-based systems, neural networks, and expert systems.",
                "Statistical analysis, decision trees, and support vector machines.",
                "Genetic algorithms, clustering, and anomaly detection."
            ],
            correct: 0,
            explanation: "Recommender systems primarily use collaborative filtering, content-based filtering, and hybrid methods. Collaborative filtering leverages user behavior and preferences, content-based filtering uses item attributes, and hybrid methods combine both approaches to improve recommendation accuracy."
        },
        {
            question: "What are the main differences between CNN and RNN?",
            options: [
                "CNNs are used for spatial data and RNNs are used for sequential data.",
                "CNNs are rule-based while RNNs are statistical models.",
                "CNNs use trees to represent data while RNNs use graphs.",
                "CNNs are faster than RNNs in all cases."
            ],
            correct: 0,
            explanation: "CNNs (Convolutional Neural Networks) are used for spatial data, such as images, capturing local patterns through convolutional layers. RNNs (Recurrent Neural Networks) are used for sequential data, such as text and time series, capturing temporal dependencies through recurrent connections."
        },
        {
            question: "What are the two main approaches in query expansion?",
            options: [
                "Relevance feedback and thesaurus-based expansion.",
                "Neural network expansion and clustering-based expansion.",
                "Graph-based expansion and rule-based expansion.",
                "Support vector expansion and decision tree expansion."
            ],
            correct: 0,
            explanation: "Query expansion techniques include relevance feedback, which refines queries based on user interaction with search results, and thesaurus-based expansion, which adds synonyms and related terms to the query to improve search relevance."
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
            correct: 0,
            explanation: "K-Nearest Neighbors (KNN) is an algorithm used for both classification and regression tasks. It works by finding the k nearest data points to a new point and making predictions based on these neighbors. For classification, it assigns the most common class among the neighbors. For regression, it averages the values of the neighbors. KNN is easy to understand and implement but can be slow with large datasets."

        },
        {
            question: "What does TF-IDF stand for and what is its purpose?",
            options: [
                "Term Frequency-Inverse Document Frequency; it measures the importance of a word in a document relative to a corpus.",
                "Total Frequency-Index Document Frequency; it counts the total occurrences of words.",
                "Term Frequency-Index Document Frequency; it measures the index of words.",
                "Total Frequency-Inverse Document Frequency; it measures the total importance of words."
            ],
            correct: 0,
            explanation: "TF-IDF stands for Term Frequency-Inverse Document Frequency. It measures the importance of a word in a document relative to a collection of documents (corpus). TF-IDF considers both how often a word appears in a document (Term Frequency) and how rare the word is across all documents (Inverse Document Frequency). This helps highlight important words that are unique to a document."

        },
        {
            question: "What is Word2Vec and what are its two main architectures?",
            options: [
                "A neural network-based model for learning word embeddings; Continuous Bag of Words (CBOW) and Skip-Gram.",
                "A rule-based system for word categorization; CBOW and Skip-Gram.",
                "A clustering algorithm for text; CBOW and GloVe.",
                "A statistical model for text classification; CBOW and LDA."
            ],
            correct: 0,
            explanation: "Word2Vec is a neural network-based model for learning word embeddings, which are vector representations of words that capture their meanings. The two main architectures are Continuous Bag of Words (CBOW) and Skip-Gram. CBOW predicts a target word from its context words, while Skip-Gram predicts context words from a target word. These embeddings help in various language processing tasks."
        },
        {
            question: "What is the main advantage of using pre-trained word embeddings?",
            options: [
                "They save computational resources and improve model performance by leveraging large-scale training.",
                "They eliminate the need for any training data.",
                "They make the model interpret every language.",
                "They automatically classify text without any additional models."
            ],
            correct: 0,
            explanation: "Pre-trained word embeddings save computational resources and improve model performance by leveraging large-scale training on extensive corpora, capturing rich semantic information."
        },
        {
            question: "What does BERT stand for and what is its primary use?",
            options: [
                "Bidirectional Encoder Representations from Transformers; used for various NLP tasks including text classification and question answering.",
                "Bidirectional Encoding for Robust Text; used for data encryption.",
                "Binary Encoder Representations from Transformers; used for image processing.",
                "Bidirectional Embedding Representations from Text; used for speech recognition."
            ],
            correct: 0,
            explanation: "BERT stands for Bidirectional Encoder Representations from Transformers. It is used for various NLP tasks, including text classification and question answering. BERT understands the context of words in both directions (left and right), which helps it understand the meaning of words more accurately."

        },
        {
            question: "How does the Attention mechanism in Transformers work?",
            options: [
                "It assigns different importance levels to different words in a sentence, allowing the model to focus on relevant parts of the input.",
                "It uses a sliding window to process parts of the input.",
                "It applies convolutional filters to the input data.",
                "It generates random noise to augment the input data."
            ],
            correct: 0,
            explanation: "The Attention mechanism in Transformers assigns different importance levels to different words in a sentence, allowing the model to focus on relevant parts of the input."
        },
        {
            question: "What is the main function of the PageRank algorithm?",
            options: [
                "To rank web pages based on the number and quality of links to them.",
                "To count the total number of words on a web page.",
                "To measure the semantic similarity between web pages.",
                "To categorize web pages into predefined topics."
            ],
            correct: 0,
            explanation: "PageRank ranks web pages based on the number and quality of links pointing to them, reflecting the page's authority and relevance."
        },
        {
            question: "What are the two main approaches in recommender systems?",
            options: [
                "Collaborative filtering and content-based filtering.",
                "Supervised learning and unsupervised learning.",
                "Clustering and classification.",
                "Neural networks and decision trees."
            ],
            correct: 0,
            explanation: "The two main approaches in recommender systems are collaborative filtering, which leverages user behavior, and content-based filtering, which uses item features."
        },
        {
            question: "What is the purpose of query expansion in information retrieval?",
            options: [
                "To improve search results by including additional relevant terms in the query.",
                "To reduce the number of search results.",
                "To sort the search results by relevance.",
                "To categorize the search results into predefined topics."
            ],
            correct: 0,
            explanation: "Query expansion improves search results by including additional relevant terms in the query, increasing the likelihood of retrieving relevant documents."
        },
        {
            question: "What is the main difference between CNN and RNN in the context of text classification?",
            options: [
                "CNNs are used for spatial data while RNNs are used for sequential data.",
                "CNNs are faster than RNNs in all cases.",
                "CNNs use decision trees while RNNs use rule-based methods.",
                "CNNs are better for text classification than RNNs."
            ],
            correct: 0,
            explanation: "CNNs (Convolutional Neural Networks) are used for spatial data, such as images, while RNNs (Recurrent Neural Networks) are used for sequential data, such as text and time series."
        },
        {
            question: "What is the purpose of using the `diabetes.csv` file in the KNN classifier notebook?",
            options: [
                "To demonstrate how to apply KNN for a binary classification problem.",
                "To train a neural network on diabetes data.",
                "To perform clustering on diabetes patients.",
                "To visualize the data using scatter plots."
            ],
            correct: 0,
            explanation: "The `diabetes.csv` file is used to demonstrate how to apply the K-Nearest Neighbors (KNN) algorithm for a binary classification problem, predicting diabetes occurrence."
        },
        {
            question: "What is the main idea behind the Continuous Bag of Words (CBOW) model?",
            options: [
                "Predicting a target word based on its context words.",
                "Predicting the next word in a sentence.",
                "Generating sentences based on a seed word.",
                "Classifying documents based on word frequencies."
            ],
            correct: 0,
            explanation: "The CBOW model predicts a target word based on its context words, learning word representations that capture semantic relationships."
        },
        {
            question: "How does the Skip-gram model in Word2Vec work?",
            options: [
                "It predicts context words given a target word.",
                "It predicts a target word based on its context words.",
                "It clusters words into predefined categories.",
                "It generates synonyms for a given word."
            ],
            correct: 0,
            explanation: "The Skip-gram model in Word2Vec predicts context words given a target word, learning word embeddings that capture semantic relationships."
        },
        {
            question: "What is the advantage of using CNNs for text classification?",
            options: [
                "They can capture local dependencies and identify key phrases in the text.",
                "They can model long-range dependencies in sequences.",
                "They are faster to train than RNNs for all types of data.",
                "They use attention mechanisms to focus on important parts of the input."
            ],
            correct: 0,
            explanation: "CNNs can capture local dependencies and identify key phrases in the text, making them effective for tasks like text classification."
        },
        {
            question: "What is BERT and why is it significant in recent text representation research?",
            options: [
                "BERT is a pre-trained transformer model that has achieved state-of-the-art results in many NLP tasks.",
                "BERT is a rule-based system for text analysis.",
                "BERT is a statistical model for language generation.",
                "BERT is a clustering algorithm for documents."
            ],
            correct: 0,
            explanation: "BERT is significant because it is a pre-trained transformer model that has achieved state-of-the-art results in many NLP tasks by providing deep contextual understanding of text."
        },
        {
            question: "What is the primary purpose of BertViz?",
            options: [
                "To visualize the attention mechanisms in BERT models.",
                "To train BERT models on new datasets.",
                "To generate text using BERT models.",
                "To cluster text data using BERT embeddings."
            ],
            correct: 0,
            explanation: "BertViz is a tool designed to visualize the attention mechanisms in BERT models, helping to understand how the model processes and interprets input text."
        },
        {
            question: "What is a content-based recommender system?",
            options: [
                "A system that recommends items based on the content of the items and the user's previous interactions with similar content.",
                "A system that recommends items based on what other users with similar preferences liked.",
                "A system that randomly suggests items to users.",
                "A system that uses collaborative filtering techniques to recommend items."
            ],
            correct: 0,
            explanation: "A content-based recommender system recommends items based on the content of the items and the user's previous interactions with similar content."
        },
        {
            question: "What is PageRank and how does it work?",
            options: [
                "PageRank is an algorithm that ranks web pages based on the quality and quantity of links pointing to them.",
                "PageRank is an algorithm that classifies web pages into categories.",
                "PageRank is a clustering algorithm for web pages.",
                "PageRank is a neural network model for predicting web page relevance."
            ],
            correct: 0,
            explanation: "PageRank is an algorithm that ranks web pages based on the quality and quantity of links pointing to them, helping to determine the authority and relevance of pages."
        },
        {
            question: "What is the role of query expansion in personalized search?",
            options: [
                "To improve search results by including additional relevant terms based on user preferences and history.",
                "To reduce the number of search results returned.",
                "To sort search results alphabetically.",
                "To filter out irrelevant search results."
            ],
            correct: 0,
            explanation: "Query expansion in personalized search aims to improve search results by including additional relevant terms based on user preferences and search history."
        },
        {
            question: "What are the main differences between CNNs and RNNs in text processing?",
            options: [
                "CNNs are good at capturing spatial hierarchies, while RNNs are good at capturing sequential dependencies.",
                "CNNs are always faster than RNNs for text processing.",
                "RNNs use convolutional layers while CNNs use recurrent layers.",
                "CNNs can handle variable-length sequences better than RNNs."
            ],
            correct: 0,
            explanation: "CNNs are good at capturing spatial hierarchies, making them suitable for image data, while RNNs excel at capturing sequential dependencies, making them ideal for text and time series data."
        }, 
        {
            question: "What is the main difference between content-based and collaborative filtering recommender systems?",
            options: [
                "Content-based filtering recommends items based on item attributes, while collaborative filtering recommends items based on user interactions.",
                "Content-based filtering uses neural networks, while collaborative filtering uses decision trees.",
                "Content-based filtering is faster but less accurate than collaborative filtering.",
                "Collaborative filtering only works with explicit feedback, while content-based filtering works with implicit feedback."
            ],
            correct: 0,
            explanation: "Content-based filtering recommends items based on item attributes, such as keywords or features, while collaborative filtering recommends items based on user interactions and behavior."
        },
        {
            question: "What are the key components of a Transformer model?",
            options: [
                "Self-attention mechanism and feed-forward neural network.",
                "Convolutional layers and pooling layers.",
                "Recurrent layers and attention mechanism.",
                "Support vector machines and clustering algorithms."
            ],
            correct: 0,
            explanation: "The key components of a Transformer model are the self-attention mechanism, which allows the model to focus on different parts of the input sequence, and the feed-forward neural network, which processes the representations."
        },
        {
            question: "How does BERT differ from traditional word embeddings like Word2Vec?",
            options: [
                "BERT generates contextual embeddings for words based on the entire sentence, while Word2Vec generates static embeddings.",
                "BERT uses clustering algorithms to generate embeddings, while Word2Vec uses neural networks.",
                "BERT is faster to train than Word2Vec.",
                "Word2Vec can handle longer sequences of text than BERT."
            ],
            correct: 0,
            explanation: "BERT generates contextual embeddings for words based on the entire sentence, capturing more nuanced meanings, while Word2Vec generates static embeddings that do not account for context."
        },
        {
            question: "What is the role of attention in the Transformer architecture?",
            options: [
                "Attention allows the model to focus on different parts of the input sequence, improving the ability to capture dependencies.",
                "Attention reduces the dimensionality of the input data.",
                "Attention is used to initialize the weights of the model.",
                "Attention helps in sorting the input data."
            ],
            correct: 0,
            explanation: "In the Transformer architecture, attention allows the model to focus on different parts of the input sequence, improving its ability to capture dependencies and relationships between words."
        },
        {
            question: "What are some common metrics used to evaluate recommender systems?",
            options: [
                "Precision, Recall, and Mean Average Precision (MAP).",
                "Accuracy, F1-Score, and Mean Squared Error (MSE).",
                "ROC-AUC, Log-Loss, and Gini Coefficient.",
                "Silhouette Score, Davies-Bouldin Index, and Calinski-Harabasz Index."
            ],
            correct: 0,
            explanation: "Common metrics used to evaluate recommender systems include Precision, Recall, and Mean Average Precision (MAP), which measure the accuracy and relevance of recommendations."
        },
        {
            question: "What is the purpose of the `classifier-KNN.ipynb` notebook?",
            options: [
                "To demonstrate the implementation of the K-Nearest Neighbors algorithm for classification.",
                "To train a convolutional neural network on image data.",
                "To cluster data points using K-Means algorithm.",
                "To perform dimensionality reduction using PCA."
            ],
            correct: 0,
            explanation: "The `classifier-KNN.ipynb` notebook demonstrates the implementation of the K-Nearest Neighbors (KNN) algorithm for classification tasks, providing practical examples and code."
        },
        {
            question: "What is Explicit Semantic Analysis (ESA) primarily used for?",
            options: [
                "To represent the meaning of texts as a weighted vector of Wikipedia-based concepts.",
                "To analyze the sentiment of text documents.",
                "To cluster documents into predefined categories.",
                "To generate new text based on input data."
            ],
            correct: 0,
            explanation: "Explicit Semantic Analysis (ESA) is used to represent the meaning of texts as a weighted vector of Wikipedia-based concepts, enabling more accurate semantic comparisons."
        },
        {
            question: "What is the primary function of the `lecture-tfidf.ipynb` notebook?",
            options: [
                "To demonstrate how to calculate and use TF-IDF for text classification.",
                "To visualize the embeddings of words in a vector space.",
                "To implement a deep learning model for image classification.",
                "To perform clustering on a set of documents."
            ],
            correct: 0,
            explanation: "The `lecture-tfidf.ipynb` notebook demonstrates how to calculate and use TF-IDF (Term Frequency-Inverse Document Frequency) for text classification, providing practical examples and code."
        },
        {
            question: "How do you interpret the output of a confusion matrix in classification?",
            options: [
                "It shows the number of true positives, true negatives, false positives, and false negatives, helping evaluate the performance of a classifier.",
                "It provides a graphical representation of the classifier's decision boundaries.",
                "It shows the distribution of data points in different clusters.",
                "It visualizes the loss and accuracy curves during model training."
            ],
            correct: 0,
            explanation: "A confusion matrix shows the number of true positives, true negatives, false positives, and false negatives, helping evaluate the performance of a classification model."
        },
        {
            question: "What is the main advantage of using a pre-trained BERT model for NLP tasks?",
            options: [
                "It leverages transfer learning to improve performance on specific tasks with less training data.",
                "It significantly reduces the size of the model.",
                "It eliminates the need for labeled data.",
                "It automatically tunes hyperparameters."
            ],
            correct: 0,
            explanation: "The main advantage of using a pre-trained BERT model for NLP tasks is that it leverages transfer learning, improving performance on specific tasks with less training data and computational resources."
        }
    ]
};

let currentQuiz = 'quiz1';
let currentQuestionIndex = 0;
let score = 0;

document.addEventListener("DOMContentLoaded", () => {
    randomizeQuestions();
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
    
    randomizeQuestions();
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
    const explanationElement = document.getElementById(`explanation${currentQuiz.slice(-1)}`);

    questionElement.textContent = questionData.question;
    optionsElement.innerHTML = "";
    explanationElement.innerHTML = ""; // Use innerHTML to allow HTML tags

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
    const explanationElement = document.getElementById(`explanation${currentQuiz.slice(-1)}`);

    if (correctIndex === null || selectedIndex === correctIndex) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("incorrect");
        optionsElement.children[correctIndex].classList.add("correct");
    }

    explanationElement.innerHTML = questionData.explanation; // Use innerHTML to render HTML tags
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

    randomizeQuestions();
    displayQuestion();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function randomizeQuestions() {
    const quiz = quizzes[currentQuiz];
    quiz.forEach(question => {
        if (question.correct !== null) {
            const correctAnswer = question.options[question.correct];
            question.options = shuffleArray(question.options);
            question.correct = question.options.indexOf(correctAnswer);
        } else {
            question.options = shuffleArray(question.options);
        }
    });
}
