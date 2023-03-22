## Test answers

1) For a prototype, I would talk to the Impact Lead and present two possibilities:
 - Work with scheduled deliveries: 
    - mobile app
    - backend with APIs:
        - sign up
        - login
        - list products
        - create order
        - update order 
        - make payment 
    - payment service
    - queue to handle payments
    - database
    - cronjob to populate products table
    - order distribution service
    - notification service
- Work with real-time deliveries
    - same pieces of sotware listed above
    - another queue to handle updates in the order

2) For a small team a monolith would be a better choice to deliver the initial version faster, test the hypothesis 
and make incremental improvements.

3) XP. The iterative framework would help in prioritization. 
Daily quick meetings would allow everyone to be yupdated on the most important topics.

4) Create main branch (protected) to concentrate the current app state. 
Each task would have its own branch, pulled from the main one. 
New changes to main would need pull requests.
Use a git service that allows automations, like automatic deployment and run lint/test pipelines on new code.

5) It would depende on the deadline and budget. If the initial deadline was one to two months, it wouldn't be
necessary. If the production version made sense, I would add more members on the beginning because we would need to maintain
the MVP while evolving the initial design for production.

6) Focus on communication between engineers and between engineers and the impact lead. Task priorization so no one gets blocked. 
Document major changes made from the inital idea.
