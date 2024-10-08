import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { StarIcon, GiftIcon, TrophyIcon } from 'lucide-react';

export default function RewardsPage() {
  return (
    <>
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Your Points</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-purple-600">1,250</p>
            <p className="text-sm text-gray-500">
              Keep earning to unlock more rewards!
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Current Tier</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <StarIcon className="h-6 w-6 text-yellow-500" />
              <span className="text-2xl font-semibold">Bronze</span>
            </div>
            <Progress value={60} className="mt-2" />
            <p className="mt-2 text-sm text-gray-500">
              400 points to Silver tier
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Lifetime Events</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-purple-600">15</p>
            <p className="text-sm text-gray-500">
              You're in the top 10% of active members!
            </p>
          </CardContent>
        </Card>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-gray-800">
        Available Rewards
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: 'Free Event Ticket',
            points: 500,
            description: 'Get a free ticket to any standard event',
            icon: <GiftIcon className="h-6 w-6 text-purple-500" />,
          },
          {
            title: 'VIP Experience',
            points: 1000,
            description: 'Upgrade to VIP at your next event',
            icon: <StarIcon className="h-6 w-6 text-purple-500" />,
          },
          {
            title: 'Exclusive Workshop',
            points: 1500,
            description: 'Access to an exclusive online workshop',
            icon: <TrophyIcon className="h-6 w-6 text-purple-500" />,
          },
          {
            title: 'Meet & Greet Pass',
            points: 2000,
            description: 'Meet a featured speaker at an upcoming event',
            icon: <GiftIcon className="h-6 w-6 text-purple-500" />,
          },
          {
            title: 'Annual Membership',
            points: 5000,
            description: 'One year of premium Ommu membership',
            icon: <StarIcon className="h-6 w-6 text-purple-500" />,
          },
          {
            title: 'Custom Event Creation',
            points: 10000,
            description: 'Create and host your own Ommu event',
            icon: <TrophyIcon className="h-6 w-6 text-purple-500" />,
          },
        ].map((reward, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                {reward.icon}
                <span>{reward.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Badge className="mb-2">{reward.points} points</Badge>
              <p className="text-sm text-gray-600">{reward.description}</p>
              <Button className="mt-4 w-full" disabled={1250 < reward.points}>
                {1250 >= reward.points ? 'Redeem' : 'Not Enough Points'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
