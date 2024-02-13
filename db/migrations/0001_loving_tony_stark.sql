ALTER TABLE `gift` RENAME COLUMN `name` TO `from`;--> statement-breakpoint
ALTER TABLE gift ADD `to` text;--> statement-breakpoint
ALTER TABLE gift ADD `msg` text;