import React, { useState } from 'react';

const Timeline = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const events = [
    {
      company: 'Easygo (Stake)',
      date: 'Sep 2025 - Jan 2026',
      title: 'Senior Software Engineer',
      description:
        '- <span class="keyword">Contributed</span> to a real-time regulatory session-limit enforcement system using NATS messaging and GraphQL subscriptions, delivering sub-second blocking and warnings on a platform processing millions of bets daily.<br /><br />' +
        '- <span class="keyword">Refactored</span> core betting enforcement engines in Node.js and TypeScript to achieve sub-millisecond compliance checks while supporting massive daily transaction volume with zero-downtime deployments.<br /><br />' +
        '- <span class="keyword">Architected</span> enhanced KYC and fraud-detection workflows using Sumsub and Veriff, closing reactivation loopholes and strengthening compliance against identity theft and underage access.<br /><br />' +
        '- <span class="keyword">Scoped</span> and decomposed onboarding and KYC enhancements for multi-engineer execution, resulting in a 20% conversion uplift while meeting aggressive compliance deadlines.',
    },
    {
      company: 'SafetyCulture',
      date: 'Mar 2020 - Aug 2025',
      title: 'Senior Software Engineer, Technical Lead (Billing)',
      description:
        '- <span class="keyword">Owned</span> the architecture of subscription lifecycle services across pricing, invoicing, and entitlements for 5M+ users at roughly 10K RPS in multi-region AWS environments, implementing idempotency, retries, and webhook resilience for financial consistency.<br /><br />' +
        '- <span class="keyword">Reduced</span> p95 tail latency of the core subscription API from 75ms to 8ms by introducing concurrent data enrichment, a Redis look-aside cache with automated invalidation, and targeted performance optimizations.<br /><br />' +
        '- <span class="keyword">Led</span> a zero-downtime migration of 500K+ users across legacy plans by building a custom scripted transformation engine with granular state tracking, logging, and rollback capabilities.<br /><br />' +
        '- <span class="keyword">Served</span> as primary on-call for the billing domain and designed Grafana dashboards for real-time monitoring of latency, error rates, throughput, and billing workflows, improving incident detection and mean time to resolution.<br /><br />' +
        '- <span class="keyword">Architected</span> Kafka-based real-time audit logging across microservices, enabling activity tracking and reducing support inquiries by 10-15%.<br /><br />' +
        '- <span class="keyword">Designed</span> a secure internal tooling platform adopted by 700+ staff, replacing risky manual production scripts with APIs and reducing operational task time from hours to seconds.<br /><br />' +
        '- <span class="keyword">Drove</span> technical direction for a team of 12 engineers through RFCs, design documents, mentorship, and alignment across Product, Finance, and GTM stakeholders.',
    },
    {
      company: 'Snug',
      date: 'Jun 2018 - Mar 2020',
      title: 'Software Engineer',
      description: 
        '- <span class="keyword">Delivered</span> high-velocity product features in a fast-paced startup environment, including a scheduling system and real-time analytics dashboard for leasing agencies that improved operational efficiency.',
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-8">
      <ol className="relative left-1/2 transform -translate-x-1/2">
        {events.map((event, index) => (
          <li 
            key={index}
            id={`timeline-${index}`}
            className="timeline-entry group relative cursor-pointer transition-all duration-300 rounded-xl p-3 scroll-mt-[100px]"
            onClick={() => toggleExpand(index)}
          >
            <div className="flex-start flex items-center pt-1">
              <div className="-ms-2 me-3 flex h-3 w-3 items-center justify-center rounded-full bg-[#569cd6] shadow-[0_0_12px_rgba(86,156,214,0.5)] group-hover:scale-125 transition-transform"></div>
              <h4 className="text-lg sm:text-xl font-semibold text-[#d4d4d4] group-hover:text-[#8dff8d] transition-colors">
                {event.company} - {event.date}
              </h4>
            </div>
            <div className={`mb-6 ms-6 pb-6 text-left transition-all duration-300 ${expandedIndex === index ? 'opacity-100' : 'opacity-80'}`}>
              <h5 className="text-base sm:text-lg font-medium text-[#8dff8d] mb-3 terminal-text">
                {event.title}
              </h5>
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedIndex === index ? 'max-h-[500px] overflow-y-auto' : 'max-h-0'
                }`}
              >
                <p className="mb-4 mt-2 text-[#8dff8d] text-left terminal-text leading-relaxed" dangerouslySetInnerHTML={{ __html: event.description }} />
              </div>
              <div className="mt-3 text-sm text-[#8dff8d]/60">
                {expandedIndex === index ? '▲ Show Less' : '▼ Show More Details'}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Timeline;
