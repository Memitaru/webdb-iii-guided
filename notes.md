Join

select orders.orderId, customers.customerName, customers.city, (employees.FirstName || ' ' || employees.LastName) as Employee, orders.orderDate
from orders
inner join customers on orders.customerId = customers.customerId
inner join employees on employees.EmployeeID = orders.EmployeeID

        
select *
from customers as c
inner join orders as o on o.customerId = c.customerId


-- I want to see all customers regardless of whether they have orders or not
select *
from customers as c
left join orders as o on c.customerId = o.customerId

-- customers without orders

select *
from customers as c
left join orders as o on c.customerId = o.customerId where o.orderID is null

-- aggregations, no of items per order (order id, 5)

select o.orderId, count(od.orderID) as ItemsCount
from orders as o
inner join orderdetails as od on o.orderID = od.orderID
group by o.orderId

Review 

- joins
- aggregate functions
- pagination
- concatenation
- is null (is not null)
- table aliases

Schema
- structure of...
    -database
    -table
- create tables
- add columns to tables

## migrations

- run `npx knex init` to generate a `./knexfile.js`
- modify `knexfile.js`to configure our db connections
- remove stuff you aren't using
- make a migration for each db schema change

npx knex migrate:make create_roles_table - creates file
npx knex migrate:latest - applies file

npx knex migrate:rollback - undo last migration

knex seed:make 001-roles
npx knex seed:run