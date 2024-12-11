import { relations } from 'drizzle-orm';
import { integer, pgTable, primaryKey, serial, text, numeric } from 'drizzle-orm/pg-core';

export const locations = pgTable('locations', {
    id: serial('id').primaryKey(),
    locationAddress: text('location_address').notNull(),
    locationLatitude: numeric('location_latitude').notNull(),
    locationLongitude: numeric('location_longitude').notNull(),
});

export const locationRelations = relations(locations, ({ many }) => ({
    locationsToRoutes: many(locationsToRoutes),
}));

export const routes = pgTable('routes', {
    id: serial('id').primaryKey(),
    routeName: text('route_name').notNull(),    
});

export const routesRelations = relations(routes, ({ many }) => ({
    locationsToRoutes: many(locationsToRoutes),
}));

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    userName: text('user_name').notNull(),
    userPassword: text('user_password').notNull(),
    userRole: text('user_role').notNull(),
});

const locationsToRoutes = pgTable('locations_to_routes', {
    locationId: integer('location_id').notNull().references(() => locations.id),
    routeId: integer('route_id').notNull().references(() => routes.id),
},
(t) => ({
    pk: primaryKey({ columns: [t.locationId, t.routeId] }),
}));

export const locationsToRoutesRelations = relations(locationsToRoutes, ({ one }) => ({
    routes: one(routes, {
        fields: [locationsToRoutes.routeId],
        references: [routes.id],
    }),
    locations: one(locations, {
        fields: [locationsToRoutes.locationId],
        references: [locations.id],
    }),
}));