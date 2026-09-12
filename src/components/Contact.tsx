import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CircularProgress from '@mui/material/CircularProgress';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  const [sending, setSending] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const form = useRef<HTMLFormElement>(null);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('ashishpandla07@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    const isNameInvalid = name.trim() === '';
    const isEmailInvalid = email.trim() === '' || !email.includes('@');
    const isMessageInvalid = message.trim() === '';

    setNameError(isNameInvalid);
    setEmailError(isEmailInvalid);
    setMessageError(isMessageInvalid);

    if (isNameInvalid || isEmailInvalid || isMessageInvalid) {
      return;
    }

    setSending(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/ashishpandla07@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          _replyto: email.trim(),
          _subject: subject.trim() || `Executive Inquiry from ${name.trim()} via Portfolio`,
          message: message.trim(),
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await response.json();

      // FormSubmit returns success: "true" or boolean true, or activation prompt
      if (response.ok && (data.success === 'true' || data.success === true || (data.message && data.message.includes('Activation')))) {
        setSubmitted(true);
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err: any) {
      console.warn('FormSubmit direct sending notice:', err);
      // Fallback via mailto if network or service has an unexpected block
      const mailtoUrl = `mailto:ashishpandla07@gmail.com?subject=${encodeURIComponent(
        subject || `Executive Inquiry from ${name}`
      )}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      )}`;
      window.open(mailtoUrl, '_blank');
      setSubmitted(true);
    } finally {
      setSending(false);
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setSubmitted(false);
    setNameError(false);
    setEmailError(false);
    setMessageError(false);
  };

  return (
    <div id="contact" className="contact-section">
      <div className="items-container">
        <div className="contact_wrapper">

          {/* Executive Section Header */}
          <div className="contact-header">
            <div className="contact-eyebrow">
              <span className="pulse-indicator"></span>
              <span>CONNECT & COLLABORATE</span>
            </div>
            <h2 className="contact-title">
              Get In <span className="highlight-gradient">Touch</span>
            </h2>
          </div>

          <div className="contact-grid">
            {/* Left Column: Direct Info & Availability Dossier */}
            <div className="contact-info-panel">

              {/* Status Dossier Card */}
              <div className="availability-card">
                <div className="status-pill">
                  <span className="dot-live"></span>
                  <span className="status-text">Available for Leadership Roles</span>
                </div>
                <p className="status-desc">
                  Exploring Senior Finance Roles: <strong>FP&A Lead</strong>, <strong>Financial Controller</strong>, or <strong>Head of Finance</strong>.
                </p>
                <div className="response-time">
                  <span className="response-icon">⚡</span>
                  <span>Typical response time: within 24 hours</span>
                </div>
              </div>

              {/* Direct Channels Cards */}
              <div className="direct-channels-list">

                {/* Email Card */}
                <div className="channel-card email-card">
                  <div className="channel-icon-box">
                    <EmailIcon className="channel-icon" />
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">Direct Email</span>
                    <a href="mailto:ashishpandla07@gmail.com" className="channel-value">
                      ashishpandla07@gmail.com
                    </a>
                  </div>
                  <div className="channel-actions">
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className={`copy-btn ${copied ? 'copied' : ''}`}
                      title="Copy to clipboard"
                    >
                      {copied ? <CheckIcon fontSize="small" /> : <ContentCopyIcon fontSize="small" />}
                      <span>{copied ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>

                {/* LinkedIn Card */}
                <a
                  href="https://linkedin.com/in/ipandla"
                  target="_blank"
                  rel="noreferrer"
                  className="channel-card linkedin-card"
                >
                  <div className="channel-icon-box">
                    <LinkedInIcon className="channel-icon" />
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">LinkedIn Profile</span>
                    <span className="channel-value">linkedin.com/in/ipandla</span>
                  </div>
                  <div className="channel-actions">
                    <span className="action-link-icon">
                      <OpenInNewIcon fontSize="small" />
                    </span>
                  </div>
                </a>

                {/* Phone Card */}
                <a
                  href="tel:+918058914286"
                  className="channel-card phone-card"
                >
                  <div className="channel-icon-box">
                    <PhoneIcon className="channel-icon" />
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">Direct Line / WhatsApp</span>
                    <span className="channel-value">+91 80589 14286</span>
                  </div>
                  <div className="channel-actions">
                    <span className="action-badge">Connect</span>
                  </div>
                </a>

                {/* Location Card */}
                <div className="channel-card location-card">
                  <div className="channel-icon-box">
                    <LocationOnIcon className="channel-icon" />
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">Base Location</span>
                    <span className="channel-value">Gurugram</span>
                  </div>
                  <div className="channel-actions">
                    <span className="location-pill">Open to Hybrid / Global</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column: Glassmorphic Message Terminal */}
            <div className="contact-form-panel">
              <div className="form-card-wrapper">
                <div className="form-card-header">
                  <h3>Send a Direct Message</h3>
                  <p>Have an executive inquiry or opportunity? Drop a note below.</p>
                </div>

                {submitted ? (
                  <div className="submission-success-banner">
                    <div className="success-icon-wrapper">
                      <CheckIcon className="success-icon" />
                    </div>
                    <h4>Message Sent Successfully!</h4>
                    <p>
                      Thank you for reaching out, <strong>{name}</strong>. Your message has been sent directly to <strong>ashishpandla07@gmail.com</strong>. I will get back to you shortly.
                    </p>
                    <button type="button" className="btn-send-another" onClick={handleReset}>
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <Box
                    ref={form}
                    component="form"
                    noValidate
                    autoComplete="off"
                    className="executive-contact-form"
                    onSubmit={sendEmail}
                  >
                    <div className="form-row-dual">
                      <div className="field-group">
                        <TextField
                          required
                          fullWidth
                          id="contact-name"
                          label="Your Name"
                          placeholder="e.g. John Doe"
                          variant="outlined"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            if (nameError) setNameError(false);
                          }}
                          error={nameError}
                          helperText={nameError ? "Please enter your name" : ""}
                        />
                      </div>
                      <div className="field-group">
                        <TextField
                          required
                          fullWidth
                          id="contact-email"
                          label="Email ID"
                          placeholder="e.g. name@company.com"
                          variant="outlined"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (emailError) setEmailError(false);
                          }}
                          error={emailError}
                          helperText={emailError ? "Please enter a valid email address" : ""}
                        />
                      </div>
                    </div>

                    <div className="field-group full-width-field">
                      <TextField
                        fullWidth
                        id="contact-subject"
                        label="Subject / Topic"
                        placeholder="e.g. Finance Leadership Role / Advisory Inquiry"
                        variant="outlined"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      />
                    </div>

                    <div className="field-group full-width-field">
                      <TextField
                        required
                        fullWidth
                        id="contact-message"
                        label="Your Message"
                        placeholder="Briefly describe the opportunity, project, or topic you would like to discuss..."
                        multiline
                        rows={3}
                        variant="outlined"
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                          if (messageError) setMessageError(false);
                        }}
                        error={messageError}
                        helperText={messageError ? "Please enter your message" : ""}
                      />
                    </div>

                    <div className="form-submit-row">
                      <Button
                        type="submit"
                        variant="contained"
                        disabled={sending}
                        endIcon={
                          sending ? (
                            <CircularProgress size={18} color="inherit" />
                          ) : (
                            <SendIcon className="send-arrow" />
                          )
                        }
                        className="btn-executive-send"
                      >
                        {sending ? 'Sending...' : 'Send Message'}
                      </Button>
                    </div>
                  </Box>
                )}
              </div>
            </div>

          </div>

          {/* Printable Contact Details Card (displayed in @media print) */}
          <div className="print-contact-dossier">
            <div className="print-contact-grid">
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <span className="contact-val">ashishpandla07@gmail.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">LinkedIn:</span>
                <span className="contact-val">linkedin.com/in/ipandla</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Phone:</span>
                <span className="contact-val">+91 80589 14286</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Location:</span>
                <span className="contact-val">Gurugram</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Availability:</span>
                <span className="contact-val">Senior Finance Leader / Controller Roles</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;