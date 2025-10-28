# blog-aggregator

A CLI tool for aggregating and following RSS feeds from your favorite blogs.

## Prerequisites

- Node.js (v18 or higher)
- PostgreSQL database
- npm or yarn package manager

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Database Setup

Create a PostgreSQL database and run the migrations:

```bash
npx drizzle-kit push
```

### 3. Configuration

Create a `.env` file in the root directory with your database connection:

```
DATABASE_URL=postgresql://username:password@localhost:5432/your_database_name
```

## Usage

Run the CLI using:

```bash
npm run start <command> [args...]
```

### Available Commands

- **`register <username>`** - Create a new user account
- **`login <username>`** - Log in as an existing user
- **`users`** - List all registered users
- **`reset`** - Delete all users and data (use with caution!)
- **`addfeed <name> <url>`** - Add a new RSS feed (requires login)
- **`feeds`** - List all available feeds
- **`follow <url>`** - Follow an RSS feed (requires login)
- **`following`** - List feeds you're following (requires login)
- **`unfollow <url>`** - Unfollow an RSS feed (requires login)
- **`browse [limit]`** - Browse recent posts from feeds you follow (requires login)
- **`agg <time_between_reqs>`** - Start the feed aggregator (e.g., `agg 1h` for every hour)

### Example Usage

```bash
# Register a new user
npm run start register john_doe

# Login
npm run start login john_doe

# Add and follow a feed
npm run start addfeed "TechCrunch" "https://techcrunch.com/feed/"
npm run start follow "https://techcrunch.com/feed/"

# Browse your feed posts
npm run start browse 10

# Start aggregating feeds every 30 minutes
npm run start agg 30m
```
