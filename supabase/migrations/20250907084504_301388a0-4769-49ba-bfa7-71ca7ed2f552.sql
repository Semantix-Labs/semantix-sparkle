
-- Enable UUID generation if not already available
create extension if not exists pgcrypto;

-- Create table to store contact form submissions
create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  budget text,
  message text not null,
  source_page text,
  ip_address text,
  user_agent text,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

-- Enable Row Level Security (RLS)
alter table public.contact_submissions enable row level security;

-- IMPORTANT:
-- We are not adding any permissive policies here.
-- This means no anonymous or authenticated client can read or write directly.
-- Inserts/reads should be done via an Edge Function using the service role key,
-- which bypasses RLS for secure server-side operations.
