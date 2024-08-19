import React from "react";
import {
  Button,
  Typography,
  Card,
  CardContent,
  Divider,
  Container,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const CompanyInfo = () => {
  return (
    <Container maxWidth="lg" className="py-8">
      <Typography variant="h2" component="h1" align="center" gutterBottom>
        About Our Company{" "}
      </Typography>{" "}
      <div className="flex flex-col lg:flex-row gap-6">
        {" "}
        {/* Overview Section */}{" "}
        <Card className="flex-1">
          <CardContent>
            <Typography variant="h4" component="h2" gutterBottom>
              Company Overview{" "}
            </Typography>{" "}
            <Divider />
            <Typography variant="body1" paragraph>
              We are a leading company in our industry, dedicated to providing
              exceptional services and products to our clients.Our team is
              passionate about innovation and excellence.{" "}
            </Typography>{" "}
          </CardContent>{" "}
        </Card>
        {/* Mission Section */}{" "}
        <Card className="flex-1">
          <CardContent>
            <Typography variant="h4" component="h2" gutterBottom>
              Our Mission{" "}
            </Typography>{" "}
            <Divider />
            <Typography variant="body1" paragraph>
              Our mission is to empower businesses and individuals through
              technology, delivering solutions that drive growth and success.We
              strive to be a trusted partner in every project we undertake.{" "}
            </Typography>{" "}
          </CardContent>{" "}
        </Card>{" "}
      </div>
      <div className="flex flex-col lg:flex-row gap-6 mt-8">
        {" "}
        {/* Vision Section */}{" "}
        <Card className="flex-1">
          <CardContent>
            <Typography variant="h4" component="h2" gutterBottom>
              Our Vision{" "}
            </Typography>{" "}
            <Divider />
            <Typography variant="body1" paragraph>
              We envision a future where technology seamlessly integrates into
              everyday life, enhancing productivity and connectivity.Our goal is
              to be at the forefront of technological advancements.{" "}
            </Typography>{" "}
          </CardContent>{" "}
        </Card>
        {/* Contact Section */}{" "}
        <Card className="flex-1">
          <CardContent>
            <Typography variant="h4" component="h2" gutterBottom>
              Contact Us{" "}
            </Typography>{" "}
            <Divider />
            <Typography variant="body1" paragraph>
              Have questions or need assistance ? Reach out to us at :
            </Typography>{" "}
            <Typography variant="body1" paragraph>
              <ContactMailIcon /> Email: info @company.com{" "}
            </Typography>{" "}
            <Typography variant="body1" paragraph>
              <InfoIcon /> Phone: (123) 456 - 7890{" "}
            </Typography>{" "}
            <Button
              variant="contained"
              color="primary"
              href="mailto:info@company.com"
              className="mt-4"
            >
              Get in Touch{" "}
            </Button>{" "}
          </CardContent>{" "}
        </Card>{" "}
      </div>{" "}
    </Container>
  );
};

export default CompanyInfo;
