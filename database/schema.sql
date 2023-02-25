set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."User" (
	"username" TEXT NOT NULL,
	"email" TEXT NOT NULL,
	"userId" serial NOT NULL,
	CONSTRAINT "User_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."Cart Items" (
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




ALTER TABLE "Cart Items" ADD CONSTRAINT "Cart Items_fk0" FOREIGN KEY ("productId") REFERENCES "Catalog"("productId");
ALTER TABLE "Cart Items" ADD CONSTRAINT "Cart Items_fk1" FOREIGN KEY ("cartId") REFERENCES "Cart"("cartId");


ALTER TABLE "Cart" ADD CONSTRAINT "Cart_fk0" FOREIGN KEY ("userId") REFERENCES "User"("userId");
