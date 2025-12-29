/*
  Warnings:

  - You are about to drop the `Booking` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Cancellation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `News` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Promo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_userId_fkey";

-- DropForeignKey
ALTER TABLE "Cancellation" DROP CONSTRAINT "Cancellation_bookingId_fkey";

-- DropTable
DROP TABLE "Booking";

-- DropTable
DROP TABLE "Cancellation";

-- DropTable
DROP TABLE "News";

-- DropTable
DROP TABLE "Promo";

-- DropEnum
DROP TYPE "BookingStatus";

-- DropEnum
DROP TYPE "CancellationStatus";
