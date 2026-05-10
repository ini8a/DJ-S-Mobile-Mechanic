"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

type FormState = {
  name: string;
  phone: string;
  suburb: string;
  service: string;
  message: string;
};

const initial: FormState = {
  name: "",
  phone: "",
  suburb: "",
  service: "",
  message: "",
};

const services = [
  "Rust Removal",
  "Log Book Service",
  "General Mechanical",
  "Diagnostics & Key Coding",
  "Brakes & Suspension",
  "Pre-Purchase Inspection",
  "Roadworthy Certificate",
  "Other",
];

export default function ContactForm() {
  const [data, setData] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);

  const update = (k: keyof FormState, v: string) =>
    setData((d) => ({ ...d, [k]: v }));

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-brand-border p-8 lg:p-10 shadow-sm text-center">
        <CheckCircle2 className="w-14 h-14 text-brand-orange mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-brand-text mb-2">
          Thanks! Message received.
        </h3>
        <p className="text-brand-muted">
          We&apos;ll be in touch within 1 business day. In a hurry? Call{" "}
          <a
            href="tel:0402381023"
            className="text-brand-orange font-semibold underline"
          >
            0402 381 023
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white rounded-2xl border border-brand-border p-6 lg:p-8 shadow-sm space-y-5"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-brand-text mb-1.5"
        >
          Name <span className="text-brand-orange">*</span>
        </label>
        <input
          id="name"
          required
          type="text"
          value={data.name}
          onChange={(e) => update("name", e.target.value)}
          className="block w-full border border-brand-border rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-semibold text-brand-text mb-1.5"
        >
          Phone <span className="text-brand-orange">*</span>
        </label>
        <input
          id="phone"
          required
          type="tel"
          value={data.phone}
          onChange={(e) => update("phone", e.target.value)}
          className="block w-full border border-brand-border rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition"
        />
      </div>

      <div>
        <label
          htmlFor="suburb"
          className="block text-sm font-semibold text-brand-text mb-1.5"
        >
          Suburb <span className="text-brand-orange">*</span>
        </label>
        <input
          id="suburb"
          required
          type="text"
          value={data.suburb}
          onChange={(e) => update("suburb", e.target.value)}
          className="block w-full border border-brand-border rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition"
        />
      </div>

      <div>
        <label
          htmlFor="service"
          className="block text-sm font-semibold text-brand-text mb-1.5"
        >
          Service
        </label>
        <select
          id="service"
          value={data.service}
          onChange={(e) => update("service", e.target.value)}
          className="block w-full border border-brand-border rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition bg-white"
        >
          <option value="">Select a service…</option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-brand-text mb-1.5"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={data.message}
          onChange={(e) => update("message", e.target.value)}
          className="block w-full border border-brand-border rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-brand-orange text-white font-semibold py-3.5 rounded-lg hover:bg-brand-orange-h transition-all min-h-12"
      >
        Send enquiry
      </button>

      <p className="text-sm text-brand-muted text-center">
        We&apos;ll get back to you within 1 business day. Prefer to call?{" "}
        <a
          href="tel:0402381023"
          className="text-brand-orange font-semibold"
        >
          0402 381 023
        </a>
      </p>
    </form>
  );
}
