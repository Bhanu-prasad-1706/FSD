
-- User Upcoming Events
select u.user_id,u.full_name,u.city,e.event_id,e.title,e.start_date from Users u
join Registrations r on u.user_id=r.user_id
join Events e on r.event_id=e.event_id
where e.status='upcoming' and u.city=e.city
order by e.start_date;

-- Top Rated Events

select e.event_id,e.title,avg(f.rating) as avg_rating,count(f.feedback_id) as feedback_count from Events e
join Feedback f on e.event_id=f.event_id
group by e.event_id,e.title
having count(f.feedback_id)>=10
order by avg_rating desc;

-- Inactive Users

select u.user_id,u.full_name,u.email from Users u
left join Registrations r on u.user_id=r.user_id
and r.registration_date>=curdate()-interval 90 day;

-- Peak Session Hours
select e.event_id,e.title,count(s.session_id) as session_count from Events e
join Sessions s on e.event_id=s.event_id
where time(s.start_time)>='10:00:00'
and time(s.start_time)<='12:00:00'
group by e.event_id;

-- Most active cities
select u.city,
       count(distinct r.user_id) as total_registrations
from Users u
join Registrations r on u.user_id=r.user_id
group by u.city
order by total_registrations desc
limit 5;

-- Event Resorce Summary
select e.event_id,e.title, count(r.resource_id) as total_resources
from events e 
left join resources r on e.event_id=r.event_id
group by e.event_id,e.title;

-- Low Feedback Alerts
select u.user_id,u.full_name,e.title as event_name,f.rating,f.comments from Feedback f
join Users u on f.user_id=u.user_id
join Events e on f.event_id=e.event_id
where f.rating<3;

-- sessions per upcoming event
select e.event_id,e.title,count(s.session_id) as session_count from events e
left join sessions s on e.event_id=s.event_id
where e.status='upcoming'
group by e.event_id,e.title;

-- organizer event summary
select u.user_id,u.full_name,e.status,count(e.event_id) as total_events from users u
join events e on u.user_id=e.organizer_id
group by u.user_id,u.full_name,e.status;

-- daily new user count
select registration_date,count(*) as user_count from users
group by registration_date
order by registration_date;

-- event with maximum sessions
select e.event_id,e.title,count(s.session_id) as session_count from events e
join sessions s on e.event_id=s.event_id
group by e.event_id,e.title
having count(s.session_id)=(
    select max(session_count)
    from(
        select count(session_id) as session_count
        from sessions
        group by event_id
    ) t
);

-- average rating per city
select e.city,avg(f.rating) as average_rating from events e
join feedback f on e.event_id=f.event_id
group by e.city;

-- most registered events
select e.event_id,e.title,count(r.registration_id) as total_registrations from events e
join registrations r on e.event_id=r.event_id
group by e.event_id,e.title
order by total_registrations desc
limit 3;

-- event session time conflict
select s1.event_id,s1.title as session1,s2.title as session2 from sessions s1
join sessions s2
on s1.event_id=s2.event_id
and s1.session_id<s2.session_id
and s1.start_time<s2.end_time
and s1.end_time>s2.start_time;

