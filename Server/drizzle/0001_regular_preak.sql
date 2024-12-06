ALTER TABLE "users_to_routes" RENAME TO "locations_to_routes";--> statement-breakpoint
ALTER TABLE "locations_to_routes" RENAME COLUMN "user_id" TO "locations_id";--> statement-breakpoint
ALTER TABLE "locations_to_routes" DROP CONSTRAINT "users_to_routes_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "locations_to_routes" DROP CONSTRAINT "users_to_routes_routes_id_routes_id_fk";
--> statement-breakpoint
ALTER TABLE "locations_to_routes" DROP CONSTRAINT "users_to_routes_user_id_routes_id_pk";--> statement-breakpoint
ALTER TABLE "locations_to_routes" ADD CONSTRAINT "locations_to_routes_locations_id_routes_id_pk" PRIMARY KEY("locations_id","routes_id");--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "locations_to_routes" ADD CONSTRAINT "locations_to_routes_locations_id_locations_id_fk" FOREIGN KEY ("locations_id") REFERENCES "public"."locations"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "locations_to_routes" ADD CONSTRAINT "locations_to_routes_routes_id_routes_id_fk" FOREIGN KEY ("routes_id") REFERENCES "public"."routes"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
