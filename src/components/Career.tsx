```tsx
import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />
          experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-content">
            <div className="career-info-box">
              <div className="career-info-in">
                <div className="career-role">
                  <h4>DevOps Lead Engineer</h4>
                  <h5>ZENOSYS SERVICES</h5>
                </div>
                <h3>2023 - 2024</h3>
              </div>

              <p>
                Built Kubernetes-based DevOps platforms, automated Jenkins
                pipelines, implemented ArgoCD GitOps workflows, Helm
                deployments, Terraform infrastructure, and observability using
                Prometheus & Grafana.
              </p>
            </div>

            <div className="career-info-box">
              <div className="career-info-in">
                <div className="career-role">
                  <h4>DevOps Technical Lead</h4>
                  <h5>AERIES TECHNOLOGIES</h5>
                </div>
                <h3>2023</h3>
              </div>

              <p>
                Designed AWS cloud solutions, automated infrastructure
                provisioning, centralized logging with ELK Stack, and improved
                cloud cost efficiency.
              </p>
            </div>

            <div className="career-info-box">
              <div className="career-info-in">
                <div className="career-role">
                  <h4>Senior DevOps Engineer</h4>
                  <h5>JOULESTOWATT / HCL TECHNOLOGIES</h5>
                </div>
                <h3>2015 - 2022</h3>
              </div>

              <p>
                Built enterprise CI/CD pipelines, Terraform automation, Docker,
                Kubernetes deployments, artifact repositories, and cloud scaling
                systems.
              </p>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Career;
```
