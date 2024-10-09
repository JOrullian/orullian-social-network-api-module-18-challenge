const usersData = [
  {
    username: "skywalker123",
    email: "skywalker123@example.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "ninjaWarrior",
    email: "ninjaWarrior@example.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "dragonSlayer",
    email: "dragonSlayer@example.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "cosmicTraveler",
    email: "cosmicTraveler@example.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "starGazer",
    email: "starGazer@example.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "techSavvy",
    email: "techSavvy@example.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "codeMaster",
    email: "codeMaster@example.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "pixelPainter",
    email: "pixelPainter@example.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "mysticRogue",
    email: "mysticRogue@example.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "shadowHunter",
    email: "shadowHunter@example.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "galaxyGuardian",
    email: "galaxyGuardian@example.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "desertNomad",
    email: "desertNomad@example.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "ironFist",
    email: "ironFist@example.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "frostMage",
    email: "frostMage@example.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "flameKnight",
    email: "flameKnight@example.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "lightBringer",
    email: "lightBringer@example.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "stormChaser",
    email: "stormChaser@example.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "oceanExplorer",
    email: "oceanExplorer@example.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "forestRanger",
    email: "forestRanger@example.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "thunderStrike",
    email: "thunderStrike@example.com",
    thoughts: [],
    friends: [],
  },
];

const thoughtsData = [
  {
    thoughtText:
      "AI and machine learning are going to revolutionize how we interact with technology in the next decade.",
    createdAt: "2024-10-05T10:00:00",
    username: "techSavvy",
    reactions: [
      {
        reactionBody: "Absolutely! AI is changing the game.",
        username: "codeMaster",
        createdAt: "2024-10-05T11:00:00",
      },
      {
        reactionBody: "The tech world is moving too fast for many to keep up!",
        username: "techSavvy",
        createdAt: "2024-10-05T12:20:00",
      },
    ],
  },
  {
    thoughtText:
      "I'm amazed by how fast the JavaScript ecosystem evolves. New frameworks every year!",
    createdAt: "2024-10-03T14:30:00",
    username: "codeMaster",
    reactions: [],
  },
  {
    thoughtText:
      "The future of web development is definitely in WebAssembly. Can't wait to see more tools built around it.",
    createdAt: "2024-10-02T09:15:00",
    username: "pixelPainter",
    reactions: [
      {
        reactionBody: "WebAssembly is a game-changer for performance.",
        username: "shadowHunter",
        createdAt: "2024-09-22T11:20:00",
      },
    ],
  },
  {
    thoughtText:
      "Quantum computing will change encryption as we know it. We need to start preparing now.",
    createdAt: "2024-09-29T08:45:00",
    username: "mysticRogue",
    reactions: [
      {
        reactionBody: "Quantum computing will take a while to be mainstream.",
        username: "desertNomad",
        createdAt: "2024-09-30T15:45:00",
      },
    ],
  },
  {
    thoughtText:
      "Cloud computing makes scaling applications so much easier, but cost optimization is still tricky.",
    createdAt: "2024-10-01T16:20:00",
    username: "cosmicTraveler",
    reactions: [
      {
        reactionBody:
          "I find cloud computing to be both fascinating and daunting.",
        username: "techSavvy",
        createdAt: "2024-10-01T14:00:00",
      },
    ],
  },
  {
    thoughtText:
      "I'm starting to see the benefits of TypeScript in large-scale applications. It's not just about catching bugs!",
    createdAt: "2024-09-28T11:35:00",
    username: "ironFist",
    reactions: [
      {
        reactionBody: "Totally agree! TypeScript is a lifesaver.",
        username: "dragonSlayer",
        createdAt: "2024-10-03T15:30:00",
      },
    ],
  },
  {
    thoughtText:
      "Cybersecurity is going to be a key focus for the next generation of software engineers.",
    createdAt: "2024-09-30T10:10:00",
    username: "dragonSlayer",
    reactions: [],
  },
  {
    thoughtText:
      "5G is going to massively increase the adoption of IoT devices in homes and industries alike.",
    createdAt: "2024-09-26T09:00:00",
    username: "galaxyGuardian",
    reactions: [
      {
        reactionBody: "5G will bring about so many new opportunities!",
        username: "ironFist",
        createdAt: "2024-09-27T08:15:00",
      },
      {
        reactionBody: "Excited for the future of IoT!",
        username: "codeMaster",
        createdAt: "2024-09-28T09:50:00",
      },
    ],
  },
  {
    thoughtText:
      "The rise of low-code platforms will empower more non-developers to create software solutions.",
    createdAt: "2024-09-27T14:45:00",
    username: "lightBringer",
    reactions: [
      {
        reactionBody: "I think the rise of low-code platforms is fascinating.",
        username: "frostMage",
        createdAt: "2024-09-26T12:30:00",
      },
      {
        reactionBody: "I think there will be more tools for developers soon!",
        username: "galaxyGuardian",
        createdAt: "2024-09-14T10:15:00",
      },
    ],
  },
  {
    thoughtText:
      "GraphQL is solving a lot of the problems we had with REST APIs. It's worth the learning curve.",
    createdAt: "2024-09-24T12:00:00",
    username: "ninjaWarrior",
    reactions: [],
  },
  {
    thoughtText:
      "DevOps is more than just tools—it's a culture shift in how development and operations teams collaborate.",
    createdAt: "2024-09-23T15:25:00",
    username: "frostMage",
    reactions: [
      {
        reactionBody: "DevOps culture is so important for modern development.",
        username: "oceanExplorer",
        createdAt: "2024-09-25T10:00:00",
      },
    ],
  },
  {
    thoughtText:
      "Blockchain's use cases go way beyond cryptocurrencies. Its decentralized nature is the key.",
    createdAt: "2024-09-21T10:30:00",
    username: "desertNomad",
    reactions: [
      {
        reactionBody:
          "I love the potential of blockchain! Excited to see where it goes.",
        username: "lightBringer",
        createdAt: "2024-09-29T12:00:00",
      },
    ],
  },
  {
    thoughtText:
      "I think containerization is one of the most impactful shifts in modern software development.",
    createdAt: "2024-09-20T18:00:00",
    username: "stormChaser",
    reactions: [
      {
        reactionBody: "Containerization makes deployment so much easier.",
        username: "mysticRogue",
        createdAt: "2024-09-24T16:50:00",
      },
    ],
  },
  {
    thoughtText:
      "Edge computing will reduce latency and improve performance, especially for real-time applications.",
    createdAt: "2024-09-19T09:20:00",
    username: "shadowHunter",
    reactions: [
      {
        reactionBody: "Edge computing will definitely enhance performance!",
        username: "cosmicTraveler",
        createdAt: "2024-09-19T08:30:00",
      },
    ],
  },
  {
    thoughtText:
      "AR and VR will redefine education, gaming, and social interactions in the near future.",
    createdAt: "2024-09-18T16:45:00",
    username: "flameKnight",
    reactions: [
      {
        reactionBody: "I can't wait to see more AR applications in education!",
        username: "starGazer",
        createdAt: "2024-09-18T14:40:00",
      },
    ],
  },
  {
    thoughtText:
      "Kubernetes is now the de facto standard for container orchestration, but it has a steep learning curve.",
    createdAt: "2024-09-17T11:05:00",
    username: "forestRanger",
    reactions: [
      {
        reactionBody:
          "Kubernetes has a steep learning curve, but it's worth it!",
        username: "stormChaser",
        createdAt: "2024-09-20T10:30:00",
      },
    ],
  },
  {
    thoughtText:
      "The shift toward microservices architecture is inevitable for scaling large applications.",
    createdAt: "2024-09-16T08:40:00",
    username: "oceanExplorer",
    reactions: [
      {
        reactionBody: "Great insights on microservices architecture!",
        username: "flameKnight",
        createdAt: "2024-09-16T10:10:00",
      },
    ],
  },
  {
    thoughtText:
      "Serverless architecture will change the way we think about infrastructure management.",
    createdAt: "2024-09-15T13:15:00",
    username: "skywalker123",
    reactions: [
      {
        reactionBody: "Serverless architectures have their pros and cons.",
        username: "mysticRogue",
        createdAt: "2024-09-15T16:00:00",
      },
    ],
  },
  {
    thoughtText:
      "React's virtual DOM is such an elegant solution to optimize UI performance. No wonder it's so popular.",
    createdAt: "2024-09-14T09:50:00",
    username: "starGazer",
    reactions: [
      {
        reactionBody: "React is my go-to for front-end development!",
        username: "ninjaWarrior",
        createdAt: "2024-09-14T17:00:00",
      },
    ],
  },
  {
    thoughtText:
      "AI ethics is going to be one of the most important discussions of our time as AI continues to grow.",
    createdAt: "2024-09-13T17:00:00",
    username: "techSavvy",
    reactions: [
      {
        reactionBody:
          "AI ethics is a critical topic. We need to tread carefully.",
        username: "galaxyGuardian",
        createdAt: "2024-09-13T19:00:00",
      },
      {
        reactionBody:
          "The conversation about ethics is so important right now.",
        username: "lightBringer",
        createdAt: "2024-09-13T14:00:00",
      },
    ],
  },
];

module.exports = { usersData, thoughtsData };
