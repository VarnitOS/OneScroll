# OneScroll

> Where your feeds become besties 🤝

OneScroll is a modern social media aggregator that unifies all your social feeds into one seamless scrolling experience. Stop app-hopping and start enjoying your content in one place.

![OneScroll App](https://example.com/app-screenshot.png)

## Features

- **Unified Feed**: Combine content from Twitter, Instagram, Facebook, LinkedIn, and more
- **Smart Timeline**: Chronological content ordering across all platforms  
- **Notification Center**: Single hub for all your social interactions
- **Customizable Experience**: Filters and preferences for your ideal content mix
- **Cross-Platform Support**: Available on iOS and Android
- **Modern Design System**: Cohesive UI components and theming
- **Dark/Light Mode**: Adaptive themes for any environment
- **User Profiles**: Manage your identity and preferences

## Tech Stack

- **Frontend**:
  - React Native / Expo
  - TypeScript
  - React Navigation
  - Reanimated for animations
  - Custom design system with consistent theming

- **Backend**:
  - Supabase
    - Authentication
    - Real-time Database
    - Edge Functions
    - Storage
  - RESTful API integration
  - OAuth2 Integration

- **Development Tools**:
  - Jest for testing
  - ESLint for code quality
  - Git for version control
  - CI/CD pipeline

## Getting Started

### Prerequisites

- Node.js (v16 or newer)
- npm or yarn
- Expo CLI
- iOS Simulator / Android Emulator (optional)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/onescroll.git

# Navigate to project directory
cd onescroll

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your Supabase credentials

# Start the development server
npm start
```

### Running on Devices

```bash
# For iOS
npm run ios

# For Android
npm run android

# For web
npm run web
```

## Project Structure

```
onescroll/
├── app/                 # App screens using file-based routing
│   ├── (main)/          # Main app screens (authenticated)
│   ├── _layout.jsx      # Root layout
│   ├── login.jsx        # Login screen
│   └── signUp.jsx       # Registration screen
├── assets/              # Static assets (images, fonts, icons)
├── components/          # Reusable UI components
├── constants/           # App constants and theme
├── context/             # React context providers
├── helpers/             # Helper functions
├── lib/                 # Core utilities
├── services/            # API and backend services
└── scripts/             # Dev and build scripts
```

## Design System

OneScroll uses a custom design system with consistent components, typography, and spacing. This ensures a cohesive user experience across the application.

- **Colors**: Defined palette with primary, secondary, and neutral tones
- **Typography**: Consistent font families and sizing
- **Components**: Reusable UI building blocks
- **Spacing**: Standardized spacing and layout rules

## Contributing

We welcome contributions! Please check out our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to all the open-source libraries that made this project possible
- Inspiration from existing social media platforms and aggregators

## Contact

For questions or feedback, please reach out to our team at [hello@onescroll.app](mailto:hello@onescroll.app)
