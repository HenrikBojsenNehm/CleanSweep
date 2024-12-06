CREATE TABLE IF NOT EXISTS "locations" (
	"id" serial PRIMARY KEY NOT NULL,
	"locationAddress" varchar NOT NULL,
	"locationLatitude" varchar NOT NULL,
	"locationLongitude" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "routes" (
	"id" serial PRIMARY KEY NOT NULL,
	"routeName" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"userName" varchar NOT NULL,
	"userPassword" varchar NOT NULL,
	"userRole" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users_to_routes" (
	"user_id" integer NOT NULL,
	"routes_id" integer NOT NULL,
	CONSTRAINT "users_to_routes_user_id_routes_id_pk" PRIMARY KEY("user_id","routes_id")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users_to_routes" ADD CONSTRAINT "users_to_routes_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users_to_routes" ADD CONSTRAINT "users_to_routes_routes_id_routes_id_fk" FOREIGN KEY ("routes_id") REFERENCES "public"."routes"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
