# DSA Stats

**DSA Stats** is a web application designed to showcase your Data Structures and Algorithms (DSA) skills directly on your GitHub profile README. Whether you're a competitive programmer, a coding enthusiast, or someone looking to highlight their problem-solving prowess, DSA Stats provides a visually appealing and interactive way to display your achievements and progress.

Project Link: [DSAStats.vercel.app](https://dsastats.vercel.app/)

## Features

- **Comprehensive Skill Display**: Showcase your DSA skills across multiple platforms including LeetCode, Codeforces, InterviewBit, HackerRank, GeeksforGeeks, and CodeChef.
- **Awards and Achievements**: Highlight the awards and recognitions you’ve earned through various contests and challenges.
- **Contest Participation**: Display the contests you’ve participated in, along with your rankings and performance.
- **Problem-Solving Stats**: Show the number of questions you’ve solved on different platforms, giving a clear picture of your dedication and expertise.
- **Customizable Themes**: Choose from a variety of predefined themes to match your personal style or customize your own theme through an interactive menu.
- **Interactive and User-Friendly**: Our intuitive interface makes it easy to set up and update your stats, ensuring your profile always reflects your latest achievements.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SudoKMaar/dsa-stats-github-readme.git
   cd dsa-stats
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your environment variables:
   ```env
   NEXT_PUBLIC_URL=your_public_url
   RESEND_API_KEY=your_resend_api_key
   EMAIL=your_email
   ```

### Running the App

1. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. Open your browser and navigate to `http://localhost:3000`.

## Usage

### Setting Up GitHub Actions

1. Create or open your GitHub repository.
2. Access the Actions tab and set up a new workflow.
3. Configure the workflow file with the provided YAML code.
4. Save and commit the workflow file.
5. Verify the workflow and check for updates.

### Customizing Your Stats Card

1. Enter your Codolio username in the input area to generate an SVG file.
2. Customize your SVG according to your taste and share it with others using your own link.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make to DSA Stats are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
