-- Set client_min_messages to warning for a cleaner output.
-- This is typically useful during development or debugging.

set client_min_messages to warning;

-- The lines below handle the schema setup and table creation.

-- Drop the "public" schema if it exists. This is for demonstration purposes only.
-- In a real-world scenario, caution should be exercised when modifying or dropping schemas.
-- DANGER: The following command instantly erases everything within the "public" schema.
-- Please be cautious and ensure you have a backup before executing this in a production environment.

drop schema "public" cascade;

-- Create a new "public" schema.

create schema "public";

-- Table creation statements continue below...

CREATE TABLE "public"."User" (
	"username" TEXT NOT NULL,
	"email" TEXT NOT NULL,
	"userId" serial NOT NULL,
	CONSTRAINT "User_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."CartItems" (
	"price" DECIMAL NOT NULL,
	"productId" integer NOT NULL,
	"cartId" integer NOT NULL,
	CONSTRAINT "Cart Items_pk" PRIMARY KEY ("productId","cartId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."Catalog" (
	"itemType" TEXT NOT NULL,
	"itemName" TEXT NOT NULL,
	"itemImage" TEXT NOT NULL,
	"price" DECIMAL NOT NULL,
	"productId" serial NOT NULL,
	CONSTRAINT "Catalog_pk" PRIMARY KEY ("productId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."Cart" (
	"cartId" serial NOT NULL,
	"createdDate" DATE NOT NULL,
	"totalPrice" DECIMAL NOT NULL,
	"userId" serial NOT NULL,
	CONSTRAINT "Cart_pk" PRIMARY KEY ("cartId")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "CartItems" ADD CONSTRAINT "Cart Items_fk0" FOREIGN KEY ("productId") REFERENCES "Catalog"("productId");
ALTER TABLE "CartItems" ADD CONSTRAINT "Cart Items_fk1" FOREIGN KEY ("cartId") REFERENCES "Cart"("cartId");


ALTER TABLE "Cart" ADD CONSTRAINT "Cart_fk0" FOREIGN KEY ("userId") REFERENCES "User"("userId");
