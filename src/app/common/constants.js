export const navigationalMenuItems = {
  home: {
    iconName: 'home',
    color: '#f9f871',
    displayName: 'home'
  },
  projects: {
    iconName: 'pencil-ruler',
    color: '#ffb75c',
    displayName: 'projects'
  },
  profile: {
    iconName: 'user-tie',
    color: '#f77c69',
    displayName: 'profile'
  },
  skills: {
    iconName: 'code',
    color: '#c7517b',
    displayName: 'skills'
  }
};

export const socialMenuItems = {
  email: {
    iconName: 'envelope',
    color: '#ffb75c',
    // color: '#ea4335',
    link: 'mailto:ryanjmurry@gmail.com'
  },
  twitter: {
    iconName: ['fab', 'twitter'],
    color: '#ffb75c',
    // color: '#1da1f2',
    link: 'https://www.twitter.com/ryanjmurry'
  },
  gitHub: {
    iconName: ['fab', 'github-alt'],
    color: '#ffb75c',
    // color: '#2fbf50',
    link: 'https://github.com/ryanjmurry'
  },
  linkedIn: {
    iconName: ['fab', 'linkedin-in'],
    // color: '#007bb5',
    color: '#ffb75c',
    link: 'https://www.linkedin.com/in/ryanjmurry/'
  }
};

export const projects = {
  whatsOnTap: {
    displayName: "What's On Tap",
    team: true,
    gitHub: 'https://github.com/ryanjmurry/whats-on-tap',
    liveSite: {
      hosted: true,
      url: 'http://whats-on-tap-app.herokuapp.com/'
    },
    technologies: ['C#', 'ASP.NET Core', 'Entity Framework', 'MySQL', 'Google Maps API'],
    teamMembers: {
      abel: {
        name: 'Abel Trotter',
        website: 'https://abel-trotter-portfolio.firebaseapp.com/',
        gitHub: 'https://github.com/atrotter0'
      },
      kevin: {
        name: 'Kevin Ahn',
        website: 'https://kevin-ahn-tech.firebaseapp.com/home',
        gitHub: 'https://github.com/kevinahn7'
      },
      elly: {
        name: 'Elly Maimon',
        website: 'https://github.com/ellymaimon',
        gitHub: 'https://github.com/ellymaimon'
      }
    }
  },
  citrusCiderHouse: {
    displayName: 'Citrus Cider House',
    team: true,
    gitHub: 'https://github.com/ryanjmurry/citrus-cider-house',
    liveSite: { 
      hosted: true, 
      url: 'https://angular-team-week.firebaseapp.com/' 
    },
    technologies: ['TypeScript', 'Angular', 'Firebase'],
    teamMembers: {
      reese: {
        name: 'Reese Glasscock',
        website: 'https://reeseglasscock.github.io/week-1-epicodus-mock-portfolio/',
        gitHub: 'https://github.com/reeseglasscock'
      },
      nate: {
        name: 'Nate Cottle',
        website: 'https://github.com/n8cotoa',
        gitHub: 'https://github.com/n8cotoa'
      },
      elly: {
        name: 'Elly Maimon',
        website: 'https://github.com/ellymaimon',
        gitHub: 'https://github.com/ellymaimon'
      }
    }
  },
  cocktailFinder: {
    displayName: 'Cocktail Finder',
    team: true,
    gitHub: 'https://github.com/ryanjmurry/cocktail-finder',
    liveSite: {
      hosted: true,
      url: 'http://beverage-maker.herokuapp.com/'
    },
    technologies: ['JavaScript', 'Webpack', 'The Cocktail Database'],
    teamMembers: {
      reese: {
        name: 'Reese Glasscock',
        website: 'https://reeseglasscock.github.io/week-1-epicodus-mock-portfolio/',
        gitHub: 'https://github.com/reeseglasscock'
      }
    }
  },
  aha: {
    displayName: 'Aha!',
    team: false,
    gitHub: 'https://github.com/ryanjmurry/aha',
    liveSite: {
      hosted: false,
      url: '',
    },
    technologies: ['C#', 'ASP.NET Core', 'MySQL']
  },
  taproom: {
    displayName: 'Just Tap It',
    team: false,
    github: 'https://github.com/ryanjmurry/taproom-revamp',
    liveSite: {
      hosted: false,
      url: ''
    },
    technologies: ['React', 'JSX', 'Node.js' ]
  }
};
