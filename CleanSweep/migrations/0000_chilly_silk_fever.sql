CREATE TABLE "locations" (
	"id" serial PRIMARY KEY NOT NULL,
	"location_address" text NOT NULL,
	"location_latitude" numeric NOT NULL,
	"location_longitude" numeric NOT NULL
);
--> statement-breakpoint
CREATE TABLE "routes" (
	"id" serial PRIMARY KEY NOT NULL,
	"route_name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_name" text NOT NULL,
	"user_password" text NOT NULL,
	"user_role" text NOT NULL
);
