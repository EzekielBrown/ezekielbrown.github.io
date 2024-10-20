const sections = [
    {
        title: "AI-related Algorithm Design and Analysis",
        questions: [
            {
                question: "What is a randomized algorithm?",
                answers: [
                    "Algorithm that uses random numbers",
                    "Algorithm that runs randomly",
                    "Non-deterministic algorithm",
                    "None of the above"
                ],
                correct: 0
            },
            {
                question: "Describe Monte Carlo algorithms.",
                answers: [
                    "Guaranteed correct results",
                    "Uses randomness for approximation",
                    "Always deterministic",
                    "Used in sorting algorithms"
                ],
                correct: 1
            },
            {
                question: "Describe Las Vegas algorithms.",
                answers: [
                    "Always returns correct result",
                    "May return incorrect result",
                    "Uses randomness for input",
                    "None of the above"
                ],
                correct: 0
            },
            {
                question: "Describe Sherwood algorithms.",
                answers: [
                    "A type of machine learning algorithm",
                    "A randomized algorithm",
                    "Algorithm used for network security",
                    "A dynamic programming algorithm"
                ],
                correct: 1
            },
            {
                question: "Why do we need local search algorithms?",
                answers: [
                    "To solve sorting problems",
                    "To optimize graph traversal",
                    "To find solutions in large search spaces",
                    "None of the above"
                ],
                correct: 2
            },
            {
                question: "Describe the Tabu search algorithm and the role of Tabu list.",
                answers: [
                    "Random search method",
                    "Optimizes using a memory-based approach",
                    "Used for exact solutions",
                    "Ignores previously visited solutions"
                ],
                correct: 1
            },
            {
                question: "Define graph connectivity in an undirected graph.",
                answers: [
                    "All vertices are connected by a path",
                    "There are cycles in the graph",
                    "Edges connect all vertices",
                    "A vertex is connected to itself"
                ],
                correct: 0
            },
            {
                question: "When is a directed graph strongly connected?",
                answers: [
                    "When each vertex has a cycle",
                    "When all vertices have edges",
                    "When there's a path between every pair of vertices",
                    "None of the above"
                ],
                correct: 2
            },
            {
                question: "Describe Breadth-first Search (BFS).",
                answers: [
                    "Uses a queue",
                    "Uses a stack",
                    "Starts from leaf nodes",
                    "Traverses nodes randomly"
                ],
                correct: 0
            },
            {
                question: "Describe Depth-first Search (DFS).",
                answers: [
                    "Uses a queue",
                    "Uses a stack",
                    "Starts from root nodes",
                    "Traverses graph in layers"
                ],
                correct: 1
            },
            {
                question: "Define Mutual reachability in the context of directed graphs.",
                answers: [
                    "Each node can reach all others",
                    "Nodes can reach each other reciprocally",
                    "Graph contains cycles",
                    "None of the above"
                ],
                correct: 1
            },
            {
                question: "Explain complexity classes.",
                answers: [
                    "Used to define algorithm efficiency",
                    "Classifies data structures",
                    "Measures space complexity",
                    "All of the above"
                ],
                correct: 0
            }
        ]
    },
    {
        title: "Reinforcement Learning",
        questions: [
            {
                question: "What are the different types of value function approximators that can be used for reinforcement learning? When should we use each type?",
                answers: [
                    "Linear, non-linear",
                    "Tabular, deep learning",
                    "Value-based, policy-based",
                    "Neural network-based, tree-based"
                ],
                correct: 0
            },
            {
                question: "Which type of reinforcement learning algorithm—on-policy or off-policy—is generally more sample efficient, and why?",
                answers: [
                    "On-policy because it improves the current policy directly",
                    "Off-policy because it learns from all experiences",
                    "On-policy because it updates more frequently",
                    "Off-policy because it uses experience replay"
                ],
                correct: 1
            },
            {
                question: "What are the conditions for SARSA and Q-learning to converge towards optimal policies and optimal value functions?",
                answers: [
                    "Exploration rate set to zero",
                    "Finite rewards and visit all states infinitely",
                    "Fixed learning rate",
                    "High learning rate and discount factor"
                ],
                correct: 1
            },
            {
                question: "Define the Markov property in the Markov Decision Process (MDP) as the mathematical framework for fully observable reinforcement learning problems.",
                answers: [
                    "The future is independent of the past",
                    "Rewards depend on future states",
                    "State transitions are cyclical",
                    "Past states affect all future decisions"
                ],
                correct: 0
            },
            {
                question: "Briefly state the Robbins-Monro conditions for SARSA to converge to the optimal policy. How to set the learning rate in order to satisfy the Robbins-Monro conditions?",
                answers: [
                    "Learning rate must decay over time",
                    "Exploration probability must stay constant",
                    "Discount factor must increase over time",
                    "Initial policy must be random"
                ],
                correct: 0
            },
            {
                question: "Estimate the values of state value function (V) with respect to states A and B using first-visit Monte-Carlo learning.",
                answers: [
                    "A: 2.33, B: 3.0",
                    "A: 3.5, B: 2.5",
                    "A: 4.0, B: 1.5",
                    "A: 3.0, B: 4.0"
                ],
                correct: 0
            },
            {
                question: "Explain how the Bellman expectation equation is used in the policy iteration dynamic programming algorithm for solving any Markov Decision Process (MDP).",
                answers: [
                    "To compute optimal actions",
                    "To calculate the expected return of each state",
                    "To improve policies iteratively",
                    "To solve linear equations in dynamic programming"
                ],
                correct: 1
            },
            {
                question: "Determine the optimal value function V* for each non-terminal state in the MDP described, assuming the discount factor is 1.",
                answers: [
                    "All values are 1",
                    "All values are 0",
                    "Values depend on terminal state",
                    "Cannot be determined"
                ],
                correct: 1
            }
        ]
    },
    {
        title: "Foundational Models",
        questions: [
            {
                question: "For a given labeled database for classification you train three networks to convergence (no errors on the database). Do the networks have identical complexity? Explain.",
                answers: [
                    "Yes, because they converge to the same result",
                    "No, complexity depends on the network architecture",
                    "Yes, because all networks solve the same problem",
                    "No, complexity depends on the size of the database"
                ],
                correct: 1
            },
            {
                question: "Explain what the complexity of a sequence expresses and why long sequences may have low complexity.",
                answers: [
                    "Complexity is a measure of difficulty in solving the sequence",
                    "Complexity measures randomness; long sequences may have patterns",
                    "Complexity is higher for longer sequences",
                    "Complexity does not apply to sequences"
                ],
                correct: 1
            },
            {
                question: "Do you need humans for state-of-the-art LLM performance in terms of human preference (e.g., non-offensive text generation)?",
                answers: [
                    "Yes, humans provide feedback to improve performance",
                    "No, AI can automatically learn preferences",
                    "Yes, because LLMs cannot understand human preferences",
                    "No, pre-trained models already encode human preferences"
                ],
                correct: 0
            },
            {
                question: "Explain the need for both a reward model and a KL-divergence measure to implement preference optimisation.",
                answers: [
                    "A reward model learns preferences; KL-divergence ensures diversity",
                    "KL-divergence prevents overfitting; reward model optimizes output",
                    "KL-divergence ensures robustness; reward model optimizes preferences",
                    "Both are used to calculate rewards"
                ],
                correct: 0
            },
            {
                question: "Explain the generation of text by chatbots such as ChatGPT and Gemini (explain only inference).",
                answers: [
                    "The model generates text by predicting the next word based on prior context",
                    "The model retrieves predefined responses",
                    "The model generates random text sequences",
                    "The model runs a search on the web to generate text"
                ],
                correct: 0
            },
            {
                question: "Explain how you would use the query, key, and value in cross-attention and provide an example application.",
                answers: [
                    "Query retrieves information, key provides context, value returns results",
                    "Query selects relevant information from the key; value computes results",
                    "Query compares data; key and value provide matching features",
                    "Query identifies matches, key refines them, and value is used to generate outputs"
                ],
                correct: 1
            },
            {
                question: "How would you use scaling laws in the development of a new LLM?",
                answers: [
                    "Scaling laws help predict performance improvements with larger models",
                    "Scaling laws help improve model interpretability",
                    "Scaling laws reduce the computational cost of training",
                    "Scaling laws do not apply to LLMs"
                ],
                correct: 0
            },
            {
                question: "Can BERT be run in parallel at inference time? How about ChatGPT?",
                answers: [
                    "Yes, both can be run in parallel",
                    "BERT can, but ChatGPT cannot",
                    "No, neither can be run in parallel",
                    "Only ChatGPT can be run in parallel"
                ],
                correct: 1
            },
            {
                question: "What is the purpose of BERT? Provide an application.",
                answers: [
                    "BERT is used for sequence classification; an example is sentiment analysis",
                    "BERT is a generative model for creating text",
                    "BERT is designed for reinforcement learning tasks",
                    "BERT is primarily used for vision tasks"
                ],
                correct: 0
            },
            {
                question: "Self-attention uses softmax, which is of the form exp(ai) / SUMj exp(aj). What is the purpose of the exponential function in softmax? Can you think of an alternative to the exponential function?",
                answers: [
                    "The exponential amplifies differences between inputs; an alternative is a linear function",
                    "The exponential smooths the output; an alternative is a quadratic function",
                    "The exponential prevents overflow; an alternative is logarithmic scaling",
                    "The exponential reduces variance; an alternative is sigmoid"
                ],
                correct: 0
            }
        ]
    },
    {
        title: "Exercise Questions on Convolutional Neural Networks for Image Synthesis",
        questions: [
            {
                question: "Explain how the discriminator in a GAN works.",
                answers: [
                    "The discriminator distinguishes real images from generated ones",
                    "The discriminator generates images from random noise",
                    "The discriminator minimizes the reconstruction error",
                    "The discriminator evaluates the loss function"
                ],
                correct: 0
            },
            {
                question: "How does the adversarial loss function guide the training of GANs?",
                answers: [
                    "It minimizes the reconstruction error",
                    "It provides feedback to the generator about how realistic the generated images are",
                    "It penalizes overfitting of the generator",
                    "It calculates the difference between input and output images"
                ],
                correct: 1
            },
            {
                question: "What is the key feature that distinguishes CycleGAN from traditional GANs?",
                answers: [
                    "CycleGAN uses a cycle consistency loss to transform images between two domains",
                    "CycleGAN generates images with higher resolution",
                    "CycleGAN requires a paired dataset for training",
                    "CycleGAN uses a single generator and discriminator"
                ],
                correct: 0
            },
            {
                question: "Why are two discriminators used in CycleGAN?",
                answers: [
                    "One for generating noise and one for removing it",
                    "One for each direction of image translation between two domains",
                    "One for color consistency and one for texture consistency",
                    "One for training stability and one for image quality"
                ],
                correct: 2
            },
            {
                question: "What is the primary difference between a VAE and a traditional autoencoder?",
                answers: [
                    "A VAE uses a probabilistic approach for encoding and decoding",
                    "A VAE has more layers than a traditional autoencoder",
                    "A VAE generates deterministic reconstructions",
                    "A VAE does not require a latent space"
                ],
                correct: 0
            },
            {
                question: "Why does a VAE use reparameterization during training?",
                answers: [
                    "To allow backpropagation through the sampling process",
                    "To reduce the complexity of the latent space",
                    "To increase the resolution of generated images",
                    "To remove noise from the training data"
                ],
                correct: 0
            },
            {
                question: "What advantage does a VAE have in generating new images compared to a standard autoencoder?",
                answers: [
                    "It allows for more continuous and diverse sampling from the latent space",
                    "It improves the reconstruction of the input images",
                    "It increases the training speed",
                    "It removes noise from the generated images"
                ],
                correct: 0
            },
            {
                question: "In Variational Autoencoders (VAEs), the re-parameterization trick is used to allow backpropagation through the sampling process when estimating the latent variable z. Given that the encoder predicts the mean μ and variance parameter σ of the latent distribution, describe the mathematical steps involved in computing the latent variable z using the re-parameterization trick.",
                answers: [
                    "z = μ + σ * ε, where ε is drawn from a standard normal distribution",
                    "z = μ * σ + ε, where ε is a random value",
                    "z = μ / σ + ε, where ε is the input data",
                    "z = μ - σ * ε, where ε is a binary mask"
                ],
                correct: 0
            }
        ]
    }
];


let currentSectionIndex = 0;
let currentQuestionIndex = 0;

function shuffleAnswers(answers) {
    return answers.map(value => ({ value, sort: Math.random() }))
                  .sort((a, b) => a.sort - b.sort)
                  .map(({ value }) => value);
}

function loadQuestion() {
    const section = sections[currentSectionIndex];
    const question = section.questions[currentQuestionIndex];

    document.getElementById('section-header').textContent = section.title; // Set section title
    document.getElementById('question-text').textContent = question.question;
    const shuffledAnswers = shuffleAnswers(question.answers.map((answer, index) => ({
        text: answer, index
    })));

    const buttons = document.querySelectorAll('.answer-button');
    buttons.forEach((button, i) => {
        button.textContent = shuffledAnswers[i].text;
        button.dataset.index = shuffledAnswers[i].index;
        button.classList.remove('correct', 'incorrect');
        button.disabled = false;
    });

    document.getElementById('question-number').textContent = currentQuestionIndex + 1;
    document.getElementById('next-button').disabled = true;
}

function checkAnswer(event) {
    const selectedIndex = parseInt(event.target.dataset.index);
    const section = sections[currentSectionIndex];
    const question = section.questions[currentQuestionIndex];
    const isCorrect = selectedIndex === question.correct;
    
    if (isCorrect) {
        event.target.classList.add('correct');
    } else {
        event.target.classList.add('incorrect');
        // Highlight the correct answer
        document.querySelectorAll('.answer-button').forEach(button => {
            if (parseInt(button.dataset.index) === question.correct) {
                button.classList.add('correct');
            }
        });
    }

    const buttons = document.querySelectorAll('.answer-button');
    buttons.forEach(button => {
        button.disabled = true;
    });

    document.getElementById('next-button').disabled = false;
}

document.querySelectorAll('.answer-button').forEach(button => {
    button.addEventListener('click', checkAnswer);
});

document.getElementById('next-button').addEventListener('click', () => {
    const section = sections[currentSectionIndex];
    currentQuestionIndex++;
    if (currentQuestionIndex < section.questions.length) {
        loadQuestion();
    } else {
        alert("You've completed this section!");
    }
});

document.getElementById('next-section-button').addEventListener('click', () => {
    currentSectionIndex++;
    if (currentSectionIndex < sections.length) {
        currentQuestionIndex = 0;
        loadQuestion();
    } else {
        alert("You have completed all sections!");
    }
});

document.getElementById('restart-button').addEventListener('click', () => {
    currentSectionIndex = 0;
    currentQuestionIndex = 0;
    loadQuestion();
});

window.onload = loadQuestion;