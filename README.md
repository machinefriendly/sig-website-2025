# SIG Energy Technology Website

This is the official website for SIG Energy Technology (SIG Innotech), a company specializing in lithium-ion battery cells and modules for renewable energy and electric mobility applications.

## Project Overview

The website is built as a static site using HTML, CSS, and JavaScript, making it easy to host on GitHub Pages. It follows a clean, professional design inspired by energy-park.co.uk, with a focus on showcasing the company's expertise, products, and solutions.

## Site Structure

The website consists of the following main sections:

- **Home**: Main landing page with company overview and key highlights
- **Products**: Showcases the range of battery cells, modules, and management systems
- **Solutions**: Presents industry-specific solutions and services
- **Insight**: Blog/article section with resources and industry news
- **Contact**: Contact information, form, and events calendar

## File Structure

```
sig-2025/
├── index.html               # Home page
├── css/                     # Stylesheet directory
│   ├── main.css             # Main stylesheet
│   └── responsive.css       # Responsive design rules
├── js/                      # JavaScript directory
│   └── main.js              # Main JavaScript file
├── asset/                   # Assets directory
│   ├── SIG ENERGY TECHNOLOGY - logo static.png  # Static logo
│   └── SIG ENERGY TECHNOLOGY-logo.gif           # Animated logo
├── pages/                   # Other HTML pages
│   ├── products/            # Product category and item pages
│   │   └── index.html       # Products main page
│   ├── solutions/           # Solutions pages
│   │   └── index.html       # Solutions main page
│   ├── insight/             # Insight pages
│   │   └── index.html       # Insight main page
│   └── contact/             # Contact and terms pages
│       ├── index.html       # Contact page with form and events
│       └── terms.html       # Terms & Conditions page
└── README.md                # Project documentation
```

## Technologies Used

- **HTML5**: For structure and content
- **CSS3**: For styling and responsive design
- **JavaScript**: For interactive elements
- **Font Awesome**: For icons
- **Google Fonts**: For typography (Roboto)

## Features

- Responsive design that works on all devices
- Interactive product filtering
- Events calendar
- Contact form
- Search functionality
- Animated elements on scroll

## Running Locally

Since this is a static website, you can simply open the `index.html` file in your web browser to view it locally. No server or build process is required.

For development, you can use any local server solution:

```bash
# Using Python's built-in HTTP server
python -m http.server

# Or using Node.js with http-server
npx http-server
```

## Deployment to GitHub Pages

To deploy this website to GitHub Pages:

1. Push the code to a GitHub repository
2. Go to the repository settings
3. Navigate to the "Pages" section
4. Select the branch you want to deploy (usually `main`)
5. Save the settings

GitHub will provide a URL where your site is published (typically `https://username.github.io/repository-name/`).

### Custom Domain Setup

To use a custom domain (sig-innotech.com):

1. Add a CNAME file to the root of your repository with the domain name
2. Update your domain's DNS settings:
   - Add an A record pointing to GitHub Pages IP addresses
   - Add a CNAME record for the www subdomain
3. Configure the custom domain in the GitHub Pages settings

## Browser Compatibility

The website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Future Enhancements

Potential future improvements:
- Add more product detail pages
- Implement a full blog system for the Insight section
- Add multilingual support (French/English)
- Enhance the search functionality with filtering options
- Add a product comparison tool

## License

All rights reserved. This project and its contents are proprietary to SIG Energy Technology.

## Contact

For questions about this website, please contact:
- Email: info@sig-innotech.com
- Phone: +33 (0)1 XX XX XX XX


when creating image, mesure the necessity of size of the image, do not create image with size bigger than necessity.

when creating pages use efficient solution, such as re-usable header component which help save edit cost instead of change every page with header.