from django.core.management.base import BaseCommand
from django.conf import settings
from djongo import models
from pymongo import MongoClient

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        client = MongoClient('localhost', 27017)
        db = client['octofit_db']

        # Drop collections if they exist
        for col in ['users', 'teams', 'activities', 'leaderboard', 'workouts']:
            db[col].drop()

        # Create unique index on email for users
        db.users.create_index([('email', 1)], unique=True)

        # Sample users
        users = [
            {'name': 'Iron Man', 'email': 'ironman@marvel.com', 'team': 'marvel'},
            {'name': 'Captain America', 'email': 'cap@marvel.com', 'team': 'marvel'},
            {'name': 'Wonder Woman', 'email': 'wonderwoman@dc.com', 'team': 'dc'},
            {'name': 'Batman', 'email': 'batman@dc.com', 'team': 'dc'},
        ]
        db.users.insert_many(users)

        # Sample teams
        teams = [
            {'name': 'marvel', 'members': ['ironman@marvel.com', 'cap@marvel.com']},
            {'name': 'dc', 'members': ['wonderwoman@dc.com', 'batman@dc.com']},
        ]
        db.teams.insert_many(teams)

        # Sample activities
        activities = [
            {'user_email': 'ironman@marvel.com', 'activity': 'run', 'distance': 5},
            {'user_email': 'cap@marvel.com', 'activity': 'cycle', 'distance': 10},
            {'user_email': 'wonderwoman@dc.com', 'activity': 'swim', 'distance': 2},
            {'user_email': 'batman@dc.com', 'activity': 'walk', 'distance': 3},
        ]
        db.activities.insert_many(activities)

        # Sample leaderboard
        leaderboard = [
            {'team': 'marvel', 'points': 15},
            {'team': 'dc', 'points': 5},
        ]
        db.leaderboard.insert_many(leaderboard)

        # Sample workouts
        workouts = [
            {'user_email': 'ironman@marvel.com', 'workout': 'pushups', 'count': 50},
            {'user_email': 'cap@marvel.com', 'workout': 'situps', 'count': 40},
            {'user_email': 'wonderwoman@dc.com', 'workout': 'squats', 'count': 60},
            {'user_email': 'batman@dc.com', 'workout': 'pullups', 'count': 30},
        ]
        db.workouts.insert_many(workouts)

        self.stdout.write(self.style.SUCCESS('octofit_db database populated with test data'))
