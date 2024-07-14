import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        <p>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/ellen-broere-bb025386/"
            target="_blank"
          >
            <strong>Ellen Broere</strong>
          </a>
          <span class="footer-emoji">🧍🏽‍♀️ </span>
          and is open-sourced on{" "}
          <a href="https://github.com/EBroere/eb-weather-app" target="_blank">
            GitHub{" "}
          </a>
          and hosted on{" "}
          <a
            href="https://eb-weather-app-shecodes.netlify.app/"
            target="_blank"
          >
            Netlify
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
