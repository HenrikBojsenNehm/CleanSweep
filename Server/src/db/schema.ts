import { InferSelectModel, relations } from "drizzle-orm"
import { pgTable, serial, varchar, integer, primaryKey } from "drizzle-orm/pg-core"

export const locations = pgTable('locations', {
    id: serial('id').primaryKey(),
    locationAddress: varchar('locationAddress').notNull(),
    locationLatitude: varchar('locationLatitude').notNull(),
    locationLongitude: varchar('locationLongitude').notNull(),
})

export const locationsRelations = relations(locations, ({ many }) => ({
    locationsToRoutes: many(locationsToRoutes),
  }));

export const routes = pgTable('routes', {
    id: serial('id').primaryKey(),
    routeName: varchar('routeName').notNull(),
})

export const routesRelations = relations(routes, ({ many }) => ({
    locationsToToutes: many(locationsToRoutes),
  }));

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    userName: varchar('userName').notNull(),
    userPassword: varchar('userPassword').notNull(),
    userRole: varchar('userRole').notNull(),
})

export const locationsToRoutes = pgTable(
'locations_to_routes',
{
    locationsId: integer('locations_id')
    .notNull()
    .references(() => locations.id),
    routesId: integer('routes_id')
    .notNull()
    .references(() => routes.id),
},
(t) => ({
    pk: primaryKey({ columns: [t.locationsId, t.routesId] }),
}),
);
export const locationsToRoutsRelations = relations(locationsToRoutes, ({ one }) => ({
routes: one(routes, {
    fields: [locationsToRoutes.routesId],
    references: [routes.id],
}),
locations: one(locations, {
    fields: [locationsToRoutes.locationsId],
    references: [locations.id],
}),
}));

export type Locations = InferSelectModel<typeof locations>
export type Routes = InferSelectModel<typeof routes>
export type Users = InferSelectModel<typeof users>