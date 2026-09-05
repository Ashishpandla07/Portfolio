import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Aug 2023 – Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Manager – Controlling / Business Finance (India Lead)</h3>
            <h4 className="vertical-timeline-element-subtitle">Cargo Partner Logistics India Pvt Ltd (Nippon Express) · Gurugram, HR</h4>
            <p>
              Led annual budgets & rolling forecasts, developed MIS dashboards (Budget vs. Actual, KPI trackers), drove cost optimization saving ~₹50 Lacs annually, turned ~75% of profit centers profitable, and boosted operational productivity by 20%.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2019 – Aug 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Manager / Finance Controller</h3>
            <h4 className="vertical-timeline-element-subtitle">Cars24 Services Pvt Ltd · Gurugram, HR</h4>
            <p>
              Streamlined month-end closing (11th → 7th day), prepared Ind-AS financial statements (109, 115, 116, 102), managed ₹80 Cr ESOP buyback, led statutory & ICFR audits (EY, GT), managed a 10-member finance team, and supported international expansion.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2019 – Dec 2019"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Audit Executive</h3>
            <h4 className="vertical-timeline-element-subtitle">N K Jain & Co. · Gurugram, HR</h4>
            <p>
              Conducted end-to-end internal audits, designed audit plans and testing procedures, led GST compliance & filings, and provided advisory on GST laws for clients.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;